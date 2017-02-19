const electron = require('electron')
const path = require('path')
const url = require('url')

const app = electron.app
const bw = electron.BrowserWindow

let win

const newWin = () => {
  win = new bw({ width: 1024, height: 768 })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.on('closed', () => win = null)
}

app.on('ready', newWin)
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())
app.on('activate', () => win === null && newWin())

const fs = require('fs')
const cp = require('child_process')

const nuxtDir = `${__dirname}/nuxt/`
const http = require('http')
const npm = require('npm')

const POLL_INTERVAL = 100

const installIfNeeded = () => {
  fs.access(`${nuxtDir}node_modules/`, fs.constants.F_OK, missingNodeModules => {
    if (missingNodeModules) {
      console.log('Preparing app for first time use...')
      const installProc = cp.spawn('npm', ['install'], {stdio: 'inherit', cwd: nuxtDir})
      installProc.on('error', (err) => console.error(`Failed installing node_modules: ${err}`))
      installProc.on('close', buildIfNeeded)
    } else {
      console.log('Node modules found. Skipping installation: running build')
      buildIfNeeded()
    }
  })
}

const buildIfNeeded = () => {
  fs.access(`${nuxtDir}.nuxt/dist/`, fs.constants.F_OK, (missingDist) => {
    if (missingDist) {
      console.log('Building Nuxt app...')
      const buildProc = cp.spawn('npm', ['run', 'build'], {stdio: 'inherit', cwd: nuxtDir})
      buildProc.on('error', err => console.error(`Failed building Nuxt app: ${err}`))
      buildProc.on('exit', runServer)
    } else {
      console.log('Nuxt already built. Skipping build: running server...')
      runServer(0)
    }
  })
}

const runServer = err => {
  if (err) return console.error(err);

  console.log('Starting Nuxt server...')
  pollServer()
  const env = Object.assign({}, process.env, {NODE_ENV: 'production'})
  const serverProc = cp.spawn('npm', ['run', 'start'], {stdio: [0, 1, 2, 'ipc'], cwd: nuxtDir, env})
  serverProc.on('error', err => console.error(`Failed running Nuxt server: ${err}`))
  serverProc.on('exit', code => !err && console.log('Goodbye.'))
}

const pollServer = () => {
  http.get('http://localhost:3000', (res) => {
    const SERVER_DOWN = res.statusCode !== 200
    SERVER_DOWN ? setTimeout(pollServer, POLL_INTERVAL) : win.loadURL('http://localhost:3000')
    res.read()
  }).on('error', pollServer)
}

installIfNeeded()

# electronuxt-starter
Create an Electron app that serves a Nuxt.js app

... This barely works right now. It starts a server(serving a Nuxt.js app) inside of Electron which you need to navigate to in a browser. It will be much more streamlined and useful(actually display the Nuxt app in Electron) soon. For now, if you REALLY want to try it out:
```
git clone https://github.com/electronuxt/electronuxt-starter
cd electronuxt-starter
npm install
npm install -g vue-cli
vue init nuxt/express nuxt && npm start
```
*Hint*: with a little luck(and 4 presses of the Enter key) you can copy/paste all the commands above at once into a terminal to get up and running with the quickness

Once you've done all of the above, drive your favorite browser over to [http://localhost:3000](http://localhost:3000) and behold your Nuxt app in all its Generic Glory!

## Credits
- [@Atinux](https://github.com/Atinux) and [@alexchopin](https://github.com/alexchopin) for creating [Nuxt.js](https://github.com/nuxt/nuxt.js) and the [Nuxt Express Starter](https://github.com/nuxt/express) I am currently using with this project!

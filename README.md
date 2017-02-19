# electronuxt-starter
Create an Electron app that serves a Nuxt.js app
## Before you get too excited
This has only been lightly tested on Linux and Mac. It almost certainly doesn't work on Windows yet(But it will)! I've also only tried it with Node v7.5.0 so far.

This is pretty much a prototype at the moment. It starts a server(serving a Nuxt.js app) inside of Electron. It does NOT display the page in the Electron app yet. You need to navigate to the Nuxt app in a browser for now. It will be much more streamlined and useful(actually display the Nuxt app in Electron) soon.

## If you REALLY want to try it out...

**Step 1 - The secret codes**
```
git clone https://github.com/electronuxt/electronuxt-starter
cd electronuxt-starter
npm install
npm install -g vue-cli
vue init nuxt/express nuxt && npm start
```
*Hint*: with a little luck(and 4 presses of the Enter key) you can copy/paste all the commands above at once into a terminal to get up and running with the quickness

**Step 2 - The waiting game**

Now watch the terminal window(NOT Electron) and wait exactly between a little while and a long time, at which point things will stop happening.

*Optional(Expert Mode)*: Don't watch the terminal. Go enjoy yourself and come back to see that it is obviously finished.

**Step 3 - The Nuxt part**

Once you've done all of the above, drive your favorite browser over to [http://localhost:3000](http://localhost:3000) and behold your Nuxt app in all its Generic Glory(and pretend you don't have a useless Electron window hanging out)!

## Credits
- [@Atinux](https://github.com/Atinux) and [@alexchopin](https://github.com/alexchopin) for creating [Nuxt.js](https://github.com/nuxt/nuxt.js) and the [Nuxt Express Starter](https://github.com/nuxt/express) I am currently using with this project!

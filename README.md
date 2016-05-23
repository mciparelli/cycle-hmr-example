# cycle-hmr-example
A Cycle.js starter project using browserify and cycle-hmr.

Usage
---

To get set up:

```bash
git clone https://github.com/mciparelli/cycle-hmr-example.git
cd cycle-hmr-example
npm install
npm start
```

You should already see a small counter opened in your browser of choice.

You can then go into `src/index.js` and change whatever DOM you like, and you should see the result straight away.

You can also change the styles in `styles.css` and it will live reload.

Strongly inspired by [Widdershin](http://www.github.com/Widdershin)'s https://github.com/Widdershin/cycle-hot-reloading-example

This is made possible by [AgentME/browserify-hmr](http://www.github.com/AgentME/browserify-hmr), along with mattdesl's excellent [budo](http://www.github.com/mattdesl/budo) development server.

All of the hot reloading configuration lives in `.babelrc` thanks to [whitecolor/cycle-hmr](https://github.com/whitecolor/cycle-hmr) babel plugin.

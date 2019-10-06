// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 16,
    // font family with optional fallbacks
    fontFamily: '"Hack Nerd Font", sanserif',
    // text color
    foregroundColor: '#fff', // currently overwritten by plugin
    backgroundColor: '#000', // currently overwritten by plugin
    borderColor: '#333', // currently overwritten by plugin

    // cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    // cursorColor: 'rgba(248,28,229,0.8)',
    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BEAM',
    cursorBlink: true,

    // custom css to embed in the main window
    css: '',
    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',
    opacity: 0.085,
    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    // Note: all these colors are currently overwritten by a theme plugin
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#FED766',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00C7FF',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#FED766',

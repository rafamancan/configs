module.exports = {
  config: {
    updateChannel: 'stable',
    fontSize: 16,
    fontFamily: '"Hack Nerd Font", sanserif',
    foregroundColor: '#fff', // currently overwritten by plugin
    backgroundColor: '#000', // currently overwritten by plugin
    borderColor: '#333', // currently overwritten by plugin
    cursorShape: 'BEAM',
    cursorBlink: true,
    css: '',
    termCSS: '',
    padding: '12px 14px',
    opacity: 0.085,
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
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00C7FF',
      lightWhite: '#ffffff'
    },
    shell: '/bin/zsh',
    shellArgs: ['--login'],
    env: {},
    copyOnSelect: false,
    quickEdit: false,
    scrollback: 10000,
    hyperBorder: {
      borderColors: ['#1D976C', '#93F9B9'],
      blurredColors: ['#177C59', '#84E0A6']
    },

    paneNavigation: {
      debug: false,
      hotkeys: {
        navigation: {
          up: 'ctrl+alt+up',
          down: 'ctrl+alt+down',
          left: 'ctrl+alt+left',
          right: 'ctrl+alt+right'
        },
        jump_prefix: 'ctrl+alt', // completed with 1-9 digits
        permutation_modifier: 'shift', // Added to jump and navigation hotkeys for pane permutation
        maximize: 'meta+enter'
      },
      showIndicators: false, // Show pane number
      indicatorPrefix: '^⌥', // Will be completed with pane number
      indicatorStyle: { // Added to indicator <div>
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: '10px'
      },
      focusOnMouseHover: false,
      inactivePaneOpacity: 0.6 // Set to 1 to disable inactive panes dimming
    },

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',
  },

  plugins: [
    "hypertheme",
    "hyperline",
    "hyperminimal",
    "hyperborder",
    "hyper-night-owl",
    "hyper-search",
    "hyper-pane",
    "hypercwd",
    "gitrocket",
  ],

  localPlugins: [],

  keymaps: {
  }
};


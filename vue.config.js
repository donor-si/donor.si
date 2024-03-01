// https://cli.vuejs.org/config/#configuration-reference
const config = require('./package.json');

process.env.VUE_APP_VERSION = config.version;

const repoName = config.repository.url.match(/\/\w+\/(.*?)\.git$/i)[1];

// pull in tailwind theme colors for the tile colors
const { emerald } = require('tailwindcss/colors');

module.exports = {
  // `docs` is a special folder that can be served via Github Pages without using a `gh-pages` branch
  outputDir: 'build',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
};

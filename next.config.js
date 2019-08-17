const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([withSass, withCSS], {
    smartSlashes: true
});
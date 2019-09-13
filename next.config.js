const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const nextConfig = {
    smartSlashes: true,
    webpack(config, options) {
        config.optimization.minimizer = [];
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

        return config;
    }
};
module.exports = withPlugins([withSass, withCSS], nextConfig);
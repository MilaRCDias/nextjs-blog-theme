const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {styledComponents:true},
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remoteNx',
        exposes: {
          './remoteNx': './src/pages/index',
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          'styled-components': {singleton: true},
          '@medlify/platform.shell': {singleton: true},
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;

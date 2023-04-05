const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.experiments = {topLevelAwait: true};


  config.plugins.push(
    new NextFederationPlugin({
      name: 'remoteNx',
      exposes: {
        './remoteNx': './src/pages/index',
      },
      filename: 'static/chunks/remoteEntry.js',
    })
    );
    
  
    return config;
  },
};

module.exports = nextConfig;

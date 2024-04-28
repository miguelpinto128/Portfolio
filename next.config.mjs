import { i18n } from './next-i18next.config.js';

export default {
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{ prefixIds: false }]
            }
          }
        }
      ]
    });

    return config;
  }
};

const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');

module.exports = withImages({
  future: {
    webpack5: true,
  },
  i18n,
});

let conf

if (process.env.VUE_APP_ENV === 'sit') {
  conf = require('./sit')
} else {
  conf = require('./production')
}

module.exports = conf

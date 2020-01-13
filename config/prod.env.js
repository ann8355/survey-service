'use strict'
const merge = require('webpack-merge')
const basicEnv = require('./basic.env')

module.exports = merge(basicEnv, {
  NODE_ENV: '"production"',
})

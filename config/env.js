const DotEnv = require('dotenv')

module.exports = {
  parse () {
    const parsedEnv = DotEnv.config().parsed
    const env = {}
    for (let key in parsedEnv) {
      env[key] = JSON.stringify(parsedEnv[key])
    }
    return env
  }
}

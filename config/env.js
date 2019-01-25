const { config, parse } = require('dotenv');
const fs = require('fs');
const path = require('path');

const defaultOptions = {
  encoding: 'utf8',
  examplePath: process.cwd(),
};

module.exports = {
  parse() {
    const configOptions = { ...defaultOptions };
    const parsedEnv = config(configOptions);
    const appEnv = {};
    for (const key in parsedEnv) {
      if (parsedEnv.hasOwnProperty(key)) {
        appEnv[key] = JSON.stringify(parsedEnv[key]);
      }
    }
    const encoding = configOptions.encoding;
    const baseEnvPath = path.resolve(configOptions.examplePath, '.env.example');
    const baseEnvBuffer = fs.readFileSync(baseEnvPath, { encoding });
    const baseEnv = parse(baseEnvBuffer);
    for(const key in baseEnv) {
      if (baseEnv.hasOwnProperty(key)) {
        appEnv[key] = JSON.stringify(process.env[key]);
      }
    }
    return appEnv;
  }
}

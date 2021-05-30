import Constants from 'expo-constants';

export const prodUrl = "http://www.mocky.io/";  // amazonaws url
const ENV = {
  dev: {
    apiUrl: prodUrl,
  },
  staging: {
    apiUrl: prodUrl
  },
  prod: {
    apiUrl: prodUrl
  }
};

function getEnvVars(env = "") {
  if (env === null || env === undefined || env === "") return ENV.dev;
  if (env.indexOf("dev") !== -1) return ENV.dev;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("prod") !== -1) return ENV.prod;
  else return ENV.dev
}

export default getEnvVars(Constants.manifest.releaseChannel);
const providerConfig = require("./config/provider.json")
const defaultProvider = "apk-dl.com"
function getRandomProvider(obj) {
    const keys = Object.keys(obj);
  
    return keys[Math.floor(Math.random() * keys.length)];
  }
function apkDl() {
    provider=getRandomProvider(providerConfig);
    const providerObject = require("./providers/" + providerConfig[provider])
    return providerObject

}

module.exports = apkDl
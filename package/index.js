const providerConfig = require("./config/provider.json")
function getRandomProvider(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}
function apkDl() {
  const downloaderObject = require("./config/download")
  return downloaderObject
}
module.exports = apkDl
const providerConfig = require("../config/provider.json")
const defaultProvider = "apk-dl.com"
const objKeyFinder = (object, key) => {
    return object.keys().find(e => e == key);
}
module.exports = function apkDownloader({ provider }) {
    if (provider && objKeyFinder(providerConfig, provider.trim())) {
        provider = provider.trim();
    }
    else {
        provider = defaultProvider;
    }
    const providerObject = require("./" + providerConfig[provider])
    return providerObject

}
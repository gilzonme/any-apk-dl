const providerConfig = require("./provider.json")
const downloader = require("download")

function getRandomProvider(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

async function download(package_name, path) {
    try {
        const provider = getRandomProvider(providerConfig);
        const providerObject = require("../providers/" + providerConfig[provider])
        const url = await providerObject.getUrl(package_name)
        await downloader(url, path);
        return true;
    }
    catch (error) {
        throw error;
    }
}
module.exports = {
    download
}
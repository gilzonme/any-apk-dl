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
        const file_name = package_name + ".apk"
        await downloader(url, path, {
            filename: file_name
        })
        return {
            download_status: 'success',
            file_name,
            full_path: path+ "/" + file_name,
        };
    }
    catch (error) {
        throw error;
    }
}
module.exports = {
    download
}
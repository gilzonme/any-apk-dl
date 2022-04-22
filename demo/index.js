const apkDownloader = require("../src/index");
let downloader = apkDownloader({ provider: "" })
downloader.getUrl("com.whatsapp").then(url => {
    console.log(url);
});

downloader.downloadApk("com.whatsapp", __dirname).then(res => {
    console.log(res)
})
const puppeteer = require('puppeteer');
const download = require("download")
async function getUrl(package_name) {
  try {
    if (!package_name) {
      throw new Error("Please provide package name")
    }
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://apk-dl.com/' + package_name);
    await page.click("a.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.fixed-size.mdl-button--primary")
    await page.waitForSelector("a.mdl-button.mdl-js-button.mdl-button--raised.mdl-button--colored.mdl-js-ripple-effect.fixed-size", { visible: true });
    let url = await page.evaluate('document.querySelector("a.mdl-button.mdl-js-button.mdl-button--raised.mdl-button--colored.mdl-js-ripple-effect.fixed-size").getAttribute("href")')
    await browser.close();
    return "http:" + url;
  } catch (error) {
    throw error
  }
}
async function downloadApk(package_name, path) {
  try {
    let url = await getUrl(package_name);
    await download(url, path);
    return true;
  }
  catch (error) {
    throw error;
  }
}
module.exports = {
  getUrl,
  downloadApk
}
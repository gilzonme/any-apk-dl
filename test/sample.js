const anyApkDl=require("../package/index");
const provider=anyApkDl();
provider.getUrl("com.whatsapp").then(res=>{
    console.log(res);
})
provider.downloadApk("com.whatsapp",__dirname).then(res=>{
    console.log(res);
})
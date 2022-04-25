const anyApkDl=require("any-apk-dl");
const provider=anyApkDl();

provider.download("com.whatsapp","./apks/").then(res=>{
    console.log(res);
})
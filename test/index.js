const anyApkDl=require("any-apk-dl");
const provider=anyApkDl();
const axios = require('axios').default;

    provider.download("com.whatsapp","./apks/").then(res=>{
        console.log(res);
    })

# any-apk-dl

A package to download apk based on package name from various sources

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=gilzonme_any-apk-dl&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=gilzonme_any-apk-dl)

## INSTALL

```
npm i any-apk-dl
```

## USAGE

```
const anyApkDl=require("any-apk-dl");
const provider=anyApkDl();

provider.download("com.whatsapp","./apks/").then(res=>{
    console.log(res);
})
```

On Successful download these information will be available

```
{
  download_status: 'success',
  file_name: 'com.whatsapp.apk',
  full_path: './apks/com.whatsapp.apk'
}
```
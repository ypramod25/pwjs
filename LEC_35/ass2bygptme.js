function downloader(url, cb) {
    setTimeout(() => {
        console.log("downloaded");
        cb("dummy data");
    }, 4000);
}

function writeFile(data, cb) {
    setTimeout(() => {
        dummyfile = "dummy.txt";
        console.log("Data written to dummyfile");
        cb(dummyfile);
    }, 2000);
}

function uploadFile(fileName, newUrl, cb) {
    setTimeout(() => {
        console.log(`file ${fileName} uplaoded to ${newUrl}`);
        cb();
    }, 3000);
}
downloader("jlsdf.com", (data) => {
    writeFile(data, (dummyfile) => {
        uploadFile(dummyfile,"ghjh.com",()=> {
            console.log("upload successful");
        });
    });
});
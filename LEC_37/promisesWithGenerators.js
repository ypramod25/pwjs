function downloader(url) {
    return new Promise((res, rej) => {
        console.log("Started downloading from ", url);
        setTimeout(() => {
            console.log("Download completed");
            let dummyData = "DummyData";
            res(dummyData);
        }, 4000)
    })
}
function writeData(dummyData) {
    return new Promise((res, rej) => {
        console.log("Started writing");
        setTimeout(() => {
            console.log("Writing completed");
            let dummyFile = "dummy.txt";
            res(dummyFile);
        }, 2000)
    })
}
function uploadFile(dummyFile, newurl) {
    return new Promise((res, rej) => {
        console.log("started uploading");
        setTimeout(() => {
            console.log("Uploading completed");
            let val = "SUCCESS";
            res(val);
        }, 3000)
    })
}


function doAfterReceiving(val) {
    const f = x.next(val);
    if(f.done)return;
    f.value.then(doAfterReceiving);
}

function* gen() {
    const data = yield downloader("abc.com");
    console.log("Downloaded data is : ", data)
    const file = yield writeData(data);
    console.log("Data written in the file ", file);
    const val = yield uploadFile(file);
    console.log(val);
}

const x = gen();
const future = x.next();

future.value.then(doAfterReceiving);
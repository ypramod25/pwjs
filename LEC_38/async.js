function downloader(url) {
    return new Promise((res) => {
        console.log("Started downloading from ",url);
        setTimeout(() => {
            const data = "Dummy Data";
            console.log("Downloaded data is : ", data);
            res(data);
        }, 4000);
    });
}
function writeFile(data) {
    return new Promise((res) => {
        console.log("Started writing to file.");
        setTimeout(() => {
            const file = "Dummy.txt";
            console.log("Data written to file : ", file);
            res(file);
        }, 2000);
    });
}
function uploadFile(url, file) {
    return new Promise((res) => {
        console.log("Started uploading to " , url);
        setTimeout(() => {
            console.log("Uploaded..")
            const response = "SUCCESS";
            res(response);
        }, 3000);
    });
}

async function execute () {
    console.log("Started..");
    const data = await downloader("www.google.com");
    const file = await writeFile(data);
    const response = await uploadFile("www.drive.com", file);
    console.log(response);
}

execute();
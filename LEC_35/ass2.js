function downloader(url, cb) {
    // Simulating a 4 second delay for downloading data
    setTimeout(() => {
        console.log(`Data downloaded from ${url}`);
        cb(null, "dummyData"); // Passing dummy data as the result
    }, 4000);
}

function writeFile(data, cb) {
    // Simulating a 2 second delay for writing to a file
    setTimeout(() => {
        const fileName = "dummyFile.txt";
        console.log(`Data written to ${fileName}`);
        cb(null, fileName); // Returning the dummy file name
    }, 2000);
}

function uploadFile(fileName, newUrl, cb) {
    // Simulating a 3 second delay for uploading the file
    setTimeout(() => {
        console.log(`File ${fileName} uploaded to ${newUrl}`);
        cb(null, "Upload Successful"); // Returning a success message
    }, 3000);
}

// Using the functions in sequence with callbacks
downloader("http://example.com/data", (err, data) => {
    if (err) {
        console.error("Download failed:", err);
        return;
    }
    
    writeFile(data, (err, fileName) => {
        if (err) {
            console.error("File write failed:", err);
            return;
        }
        
        uploadFile(fileName, "http://newurl.com/upload", (err, message) => {
            if (err) {
                console.error("Upload failed:", err);
                return;
            }
            
            console.log(message); // This will log the final success message
        });
    });
});

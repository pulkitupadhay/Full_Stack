//  alternate (but it is not good)
function download(url){
    setTimeout(() => {
        console.log("book downloaded");
        unzipped(parsig);
    }, 3000);
}
function unzipped(parsig){
    setTimeout(() => {
        console.log("book unzipped");
        setTimeout(() => {
            console.log("your book is parsed");
            setTimeout(() => {
                console.log("testing and analyzing of book is completed");
                setTimeout(() => {
                    console.log("uploading is sucessfull");
                }, 3000);
            }, 4000);
        }, 2000);
    }, 1000);
}
download(unzipped);
function download(url){
    setTimeout(() => {
        console.log("book downloaded");
        unzipped(parsig);
    }, 3000);
}
function unzipped(parsig){
    setTimeout(() => {
        console.log("book unzipped");
        parsig(testbook);
    }, 1000);
}
function parsig(testbook){
    setTimeout(() => {
        console.log("your book is parsed");
        testbook(upload);
    }, 2000);
}
function testbook(upload){
    setTimeout(() => {
        console.log("testing and analyzing of book is completed");
        upload();
    }, 4000);
}
function upload(){
    setTimeout(() => {
        console.log("uploading is sucessfull");
    }, 3000);
}
download(unzipped);

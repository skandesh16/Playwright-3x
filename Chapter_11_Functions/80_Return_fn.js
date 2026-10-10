function getstatus (code){
    if (code >= 200 && code <300 ) return "OK";
    if (code >= 400 && code < 500) return "Client error";
    if (code >= 500 ) return "Server Error";
}

console.log(getstatus(200));
console.log(getstatus(404));
console.log(getstatus(503));


let responseCode = 200;

switch(responseCode) {
    case 200:
        console.log("Success");
        break;
    case 201:
        console.log("Created");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Invalid response code");
        break;
}
let Broswer = "Opera";

switch(Broswer.toLowerCase()) {
    case "chrome":
    case "brave":
    case "Chromium":
    case "opera":
        console.log("Launch Chromium Browsers");
        break;
    case "firefox":
        console.log("Launch Firefox");
        break;
    case "edge":
        console.log("Launch Edge");
        break;
    case "safari":
        console.log("Launch Safari");
        break;
    default:
        console.log("Unknown Browser - Manual Testing Needed");
        break;
}

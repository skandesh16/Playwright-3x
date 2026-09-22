let Status = 0;
console.log (typeof Status)
switch (Status) {
    case "flase":
        console.log("Flase Mateched");
        break;
    case 0:
        console.log("0 matched");
        break;  
    default:
        console.log("Invalid Status");
        break;
}

let x = 10;
// Always execute the frsit case when we have same values:
switch(x) {
    case 10:
        let b1 = 1
        console.log(b1);
        break;
    case 10:
        let b2 = 2
        console.log(b2);
        break;
    case 30:
        console.log("x is 30");
        break;
    default:
        console.log("x is not 10, 20, or 30");
        break;
}
function add(a,b, c){
    return a + b + c;
}
console.log(add(1,2,3));

let num = [1,2,3];
add(...num);

function hasError (...codes){
    return codes.some (c => c>=400);
}
let responsecode = [200, 201, 404, 500]
let result = hasError(...responsecode);
console.log(result);


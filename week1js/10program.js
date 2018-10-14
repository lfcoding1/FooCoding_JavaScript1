var program = [23, "this is a string", 13, "yellow",];
console.log(program);
console.log("Yes you can:", program);

/*my answer, better answer is below
var compare = 6/0 === 10/0;
console.log(compare);
var compareNeg = -6/0 === 10/0;
console.log(compareneg);*/

function compares(x, y){
    if (x /0 === y/0){
        console.log("Yes they are the same");
        console.log(x / y);
        } else {
        console.log("no they are not equal");
    }
}
compares(6, 10);

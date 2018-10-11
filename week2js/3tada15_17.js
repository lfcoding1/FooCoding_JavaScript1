//15.equality in arrays//
let x = [1,2,3]; 
let y = [1,2,3]; 
let z = y;

function compare(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
console.log(compare(x, y));
console.log(compare(z, y));
console.log(compare(z, x));



//16. foo//
let o1 = { foo: 'bar' }; 
let o2 = { foo: 'bar' }; 
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);

o2.foo = 'chicken';
console.log(o2);
console.log(o3);  // yes o3 has been changed//

// 17. type of//
let bar = 42;  // typeof bar would return number//
console.log(typeof typeof bar); // returns string//







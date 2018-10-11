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
let bar = 42;  
console.log(typeof typeof bar); 
console.log(typeof bar);
console.log(bar);

// 42 is a primitive (ie because it is a number).  so you cannot get a typeof of it usually as it has no property.
//but in order to get a typeof, it is temporarily coerced into being an object.
//so then it can return a value ie string (line 34) or number (line 35)
//the created object is then removed into the garbage.







//15.equality in arrays//
let x = [1,2,3]; 
let y = [1,2,3]; 
let z = y;

x == y ? console.log("equal") : console.log("not equal");
x === y ? console.log("equal") : console.log("not equal");
z == x ? console.log("equal") : console.log("not equal");
z === x ? console.log("equal") : console.log("not equal");
z == y ? console.log("equal") : console.log("not equal");
z === y ? console.log("equal") : console.log("not equal");
/*Why is these equal/not equal? because x and y might have the same looking info in it, they are not the same objects.
but z and y do have the same objects, because they are both just pointers pointing to the same box.
x and y are both pointing to two different boxes which both happen to have the same info in it.*/


/*assigning variable by content or reference , ie z = y is saying that z has the same 'address' as y does.//
ie they both point to the same box, with the box being the [] stuff
note: x does not equal y in this case because they do not point to the same object.
ie: their objects look the same, but they are two different boxes, whilst z is only pointing to y's box,
it is not actually making a whole new box for z */
/*THIS CODE DOESN'T OUTPUT THE RIGHT INFO.  THE LAST SHOULD BE FALSE */


/*function compare(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
console.log(compare(x, y));
console.log(compare(z, y));
console.log(compare(z, x));*/



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
/* this is the same as question 15, o2 and o3 both point to the same box. so when you change the box 
contents, both o2 and o3 change because they are both pointing to that box.*/node

// 17. type of//
let bar = 42;  
console.log(typeof typeof bar); //returns 'string' because the word number is a string?//
console.log(typeof bar); //returns 'number' because the value of bar is 42 which is a number//
console.log(bar);




//1. create a function //
function sum(){
    let sum =0; 
    for(var i=0;i<arguments.length;i++){
       sum += arguments[i];
    }
     return sum;
  }

  console.log(sum(1, 2, 5));

    /* someone elses response to question 1:
  var a, b, c;
  function sumOfThree(a,b,c){
      console.log(a+b+c);
  }
  sumOfThree(1, 'b', 3);
  sumOfThree('ab', 'c', 'd');*/

 
//2. colorCar function//
function colorCar(color){
    console.log("The " + color + " car");
}
colorCar("red");
colorCar("orange");

//3.Object and function//
let dog = {
    breed: "husky",
    name: "Roger",
    age: 12,
}
function thisDog(obj){
    console.log(obj);
}
thisDog(dog);
/*so when the let variable 'dog' was created, it became a list by the way that the
information was entered, ie name: age: etc).  then the function asks that we print an obj when it is called
ie the command is : console.log(obj).  so the functions' purpose is to print an object when 
'thisDog' is called.
the object is not yet identified, it could be any object.  when we call the function
 we put the name of the object in the brackets, which in this case is 'dog'
so: thisDog(dog); will print out whatever is within the object called 'dog'. */

//4. Vehihcle Type//
var code = (a === 2) ? "car":"motorbike";
var color = "blue";
function vehicleType(color, code){
 console.log("A " + color + " " + code);
}
vehicleType(color, code);

//5. single line //
console.log(3 === 3) ? console.log("yes"): console.log("no");
/* or you can write it like this:
console.log(3 === 3 ? "yes" : "no");
it will do the same thing as above*/




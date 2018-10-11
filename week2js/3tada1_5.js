
//1. create a function //
function sum(){
    let sum =0; 
    for(var i=0;i<arguments.length;i++){
       sum += arguments[i];
    }
     return sum;
  }

  console.log(sum(1, 2, 5));
 
//2. colorCar function//
function colorCar(color){
    console.log("The " + color + " car");
}
colorCar("red");

//3.Object and function//
let dog = {
    breed: "husky",
    name: "woof",
    age: 12,
}
function thisDog(obj){
    console.log(obj);
}
thisDog(dog);



//4. Vehicle Type//
var code = (a === 2) ? "car":"motorbike";
var color = "blue";
function vehicleType(color, code){
 console.log("A " + color + " " + code);
}
vehicleType(color, code);

//5. single line //
console.log(3 === 3) ? console.log("yes"): console.log("no");




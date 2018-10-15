//6. vehicle 


var vehicle = ["motorbike", "caravan", "bike", "scooter", "car", "truck"];
var age;

console.log(vehicle[5]);

function vehicleList(color, index, age){
for(i =0; i<vehicle.length; i++)
if(index === i ){
    (age => 2) ? console.log("A " + color + " new " + age) : console.log("A " + color + " used " + age);
}
}
vehicleList("pink", 0, vehicle[1]);

//7. list of vehicles//
console.log(vehicle);

//8 3rd element//
console.log(vehicle[2]);

//9.function vehicle//
function getVehicle(color, index, age){
    for(i =0; i<vehicle.length; i++)
    if(index === i ){
        (age < 1) ? console.log("A " + color + " new " + age) : console.log("A " + color + " used " + age);
    }
}
getVehicle("Green", 2, vehicle[3]);



//10. advertisement//

function garage(){
    var advertisement = ("At Amazing Joe's Garage, we service: ");
    var last_item = vehicle[vehicle.length - 1];
    for (i = 0; i < vehicle.length; i++){
    if (i === 0) {
    console.log((advertisement) + vehicle[0] + "s,"); 
    } else if (i < vehicle.length - 1){
        console.log(vehicle[i] + "s,");
    } else {
        console.log("and " + (last_item) + "s.");
    }
}
}
garage();



/* 11. What if you add one more vehicle to the list, 
can you have that added to the advertisement 
without changing the code for question 10?/*/
vehicle.push("rickshaw");
garage();
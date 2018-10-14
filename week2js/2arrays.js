let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("I think the new value of the array is many favorite animals");
console.log(favoriteAnimals);
// 0 here means: do not delete anything, ie splice, what is going in, what is going out....//
//..we are putting something in at position 1, but we are not taking anything out, ie 0//

let favAnimalsLength = favoriteAnimals.length;
console.log("The array has a length of: " + favAnimalsLength);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
/*if you used pop here it would only delete the last animal.  use splice here because giraffe is not the
last item and that is what you to delete*/

let a = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + a );

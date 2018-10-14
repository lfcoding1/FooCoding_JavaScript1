let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

let stringLength = myString.length;
console.log(stringLength);

let myString_new = "hello " +"this "+ "is a " + "difficult " + "to read " + "sentence";
console.log(myString_new);

//alternative, better way to do it://
myString = myString.replace(/,/g, " ");
console.log(myString);

//note: the /g means to use 'global' scope.  if you didn't put this in, only the hello is separated with a space//


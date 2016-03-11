// console.log('hi');

// //were declaring a variable
// // and assigning it a function

// var sayMyName = function(name) {
//   return "say my name say my name, " + name;
// }

// // we are calling aor invoking that function
// // sayMyName('Beyonce');


// // paramters is when youre creating a function
// // arguement is when you run the function


// var output = sayMyName('beyonce'); // invoked here


// console.log( sayMyName('beyonce') ); // string??
// console.log( output);    //string??????

// var output = sayMyName;

// console.log( sayMyName('beyonce') );
// console.log( output('ohhhhh'));
// console.log( output()); // returns undefined


// var sayMyName = function(name, number) {
//   return "say my name say my name, " + name;
// }


// *********************************************************************
// rewrite thsi to build and return
// a string "say my name say my name..." tat number of times

// sayMyName('beyonve', 2) // expected output


// var sayMyName = function(name, number) {
//   return ("(("say my name say my name, " + name) * number)" + number);
// }

// sayMyName("beyonce", 5);


var dragoon = "Cid";
var sayMyName = function(name, number) {
  var messageString = 'say my name, say my name ' + name;
  for (var counter = 1; counter < number; counter++) {
    messageString += messageString;
  }
  // just remember this// return outside loop
  return messageString;
}

sayMyName();



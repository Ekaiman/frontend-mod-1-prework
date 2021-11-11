// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare function called buildABear that takes 5 arguements
function buildABear(name, age, fur, clothes, specialPower) {
  //Declare variable named greeting that is assigned to the value of a string
  //that is interpolated with a variable
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declare variable named demographics that is assigned to an array
  var demographics = [name, age];
  // Declare a variable named powerSaying that is assigned to the value of a string
  // that uses concatenation with a variable
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declare a variable called builtBear that is assigned to the value of an object
  var builtBear = {
    // Declare key-value pair, basicInfo is the key
    basicInfo: demographics,
    // Declare key-value pair, clothes is the key
    clothes: clothes,
    // Declare key-value pair, exterior is the key
    exterior: fur,
    // Declare key-value pair, cost is the key
    cost: 49.99,
    // Declare key-value pair, sayings is the key and the value is an array
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Declare key-value pair, idCuddly is the key and the value is a boolean
    isCuddly: true,
  };
  // Return value will hold the builtBear object information
  return builtBear
}

//Pass arguements through buildABear function, holding an array for clothes arguement
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//Pass arguements through buildABear function, holding an array for clothes arguement
//(name, age, fur, clothes, specialPower)
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Declare a function that take 3 arguements
function fizzBuzz(num1, num2, range)
// Create a loop starting at 0. It can run less than or equal to the declared range, and will
//add one to i each time it runs until it can not run
  for (var i = 0; i <= range; i++) {
    // if the remainder of i divided bu num1 is strictly equal to 0, AND if the remainer of
    // i divided by num2 is strictly zero, both evaluate to true then
    if (i % num1 === 0 && i % num2 === 0) {
      //log to the console fizzbuzz
      console.log('fizzbuzz');
      //otherwise if the remainder of i divided by num1 is strictly equal to 0
    } else if (i % num1 === 0) {
      //log to the console fizz
      console.log('fizz');
      // otherwise if the remainer of i divided by num2 is strictly zero
    } else if (i % num2 === 0) {
      // log to the console buzz
      console.log('buzz');
      // if none of the above evaluates to true
    } else {
      //log to the console i
      console.log(i);
    }
  }
}

//pass arguement through fizzBuzz arguement up to 100 times with num1 being 3 and num2 being 5
// or until function returns false
fizzBuzz(3, 5, 100);
//pass arguement through fizzBuzz arguement up to 400 times with num1 being 5 and num2 being 8
// or until function returns false
fizzbuzz(5, 8, 400);

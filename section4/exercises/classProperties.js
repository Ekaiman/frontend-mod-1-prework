/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!



 // Prompt 1: Dog


- class: dog breed object instances: weight, height, color
/*
class DogBreed {

};

var borderCollie = new DogBreed();
console.log(borderCollie);

var goldenRetriever = new DogBreed();
console.log(goldenRetriever);



// Prompt 2: Snack
class SnackSatisfaction {

};

var goldFish = new SnackSatisfaction();
console.log(goldFish);

var doritos = new SnackSatisfaction();
console.log(doritos);



// Prompt 3: Shirt
class ShirtType  {

};

var shortSleeve = new ShirtType();
console.log(shortSleeve);

var longSleeve = new ShirtType();
console.log(longSleeve);

*/
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
/*
class DogBreed {
  constructor(lbs, inches, hue) {
    this.weight = lbs;
    this.height = inches;
    this.color = hue;
  }
}

var borderCollie = new DogBreed();
console.log(borderCollie);

var goldenRetriever = new DogBreed();
console.log(goldenRetriever);


// Prompt 2: Snack
class SnackSatisfaction {
  constructor(outOf10, outOf5, savoryOrSweet) {
    this.crunchLevel = outOf10;
    this.saltRating = outOf5;
    this.flavor = savoryOrSweet;
   }
}

var goldFish = new SnackSatisfaction();
console.log(goldFish);

var doritos = new SnackSatisfaction();
console.log(doritos);

// Prompt 3: Shirt
class ShirtType  {
  constructor(length, material, shape) {
    this.sleeve = length;
    this.softness = material;
    this.neck = shape;
  }
}

var shortSleeve = new ShirtType();
console.log(shortSleeve);

var longSleeve = new ShirtType();
console.log(longSleeve);
*/

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
  class DogBreed {
    constructor(lbs, inches, hue) {
      this.weight = lbs;
      this.height = inches;
      this.color = hue;
    }
  }

  var borderCollie = new DogBreed(22, 19, 'Black and white');
  console.log(borderCollie);

  var goldenRetriever = new DogBreed(30, 21, 'Golden');
  console.log(goldenRetriever);


// Prompt 2: Snack
  class SnackSatisfaction {
    constructor(outOf10, outOf5, savoryOrSweet) {
      this.crunchLevel = outOf10;
      this.saltRating = outOf5;
      this.flavor = savoryOrSweet;
     }
  }

  var goldFish = new SnackSatisfaction('6/10', '3/5', 'savory');
  console.log(goldFish);

  var doritos = new SnackSatisfaction('9/10', '4/5', 'savory');
  console.log(doritos);

// Prompt 3: Shirt
  class ShirtType  {
    constructor(length, material, shape) {
      this.sleeve = length;
      this.softness = material;
      this.neck = shape;
    }
  }

  var shortSleeve = new ShirtType('short', 'cotton', 'v neck');
  console.log(shortSleeve);

  var longSleeve = new ShirtType('long', 'silk', 'button up');
  console.log(longSleeve);

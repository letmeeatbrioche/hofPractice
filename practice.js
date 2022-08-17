// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */


// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// moreFruits(fruits);

// use _.each to traverse the number array and determine
// which are multiples of five.

// Problem - Complete the multiplesOfFive function using _.each()
  // to determine how many elements from the input collection are
  // multiples of 5.

// I - an array of numbers
// O - the count of elements that are multiples of 5
// C - Do not use a for loop, or .forEach()
// E - None

// Strategy
  // Create a count variable
  // Call _.each() with the input array and function that
    // determines multiples of 5
  // Increment count variable by 1 for each multiple of 5 found
  // Return count variable

var multiplesOfFive = function(numbers) {
  // Create a count variable, set to 0
  var count = 0;
  // Call _.each with input array
  _.each(numbers, function(num) { // DO I NEED TO ADD ALL PARAMETERS IF I DON'T NEED THEM?
    // If element divided by 5 has no remainder
    if (num % 5 === 0) {
      // Increment count variable by 1
      count++;
    }
  });
  // Return count variable
  return count;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.

// Problem - Complete the onlyOneFruit function, given a collection and
  // target value, that returns an array with only the target value.

// I - an array and a value
// O - an array with only the target value
// C - Do not create new array or use a for loop in onlyOneFruit
// E - None

// Strategy
  // Return value from call to _.filter with input array and function
    // Function checks if each element is equal to target value


var onlyOneFruit = function(fruits, targetFruit) {
  // Return call to _.filter with input array
    // filter function returns each element being equal to target value
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.

// Problem - Complete startsWith function, given an array and a string character,
  // that returns an array only of the values that start with input letter
  // using _.filter.

// I - An array and a string character
// O - An array of values from input array that start with the string character
// C - Do not create new arrays or for loops
// E - None

// Strategy
  // Return return value from call to _.filter given input array and a
    // function that determines if each element starts with input letter.

var startsWith = function(fruits, letter) {
  // Return call to _.filter given fruits and a function
    // that returns if each element starts with letter
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.

// Problem - Complete cookiesOnly function, given an array of objects
  // that returns an array of only the objects with type 'cookie'.

// I - An array of objects
// O - An array of objects with only type 'cookie'
// C - Do not create new arrays or use for loop
// E - None

// Strategy
  // Return return value from _.filter, given an array and a function
    // that returns objects from input array having type 'cookie'

var cookiesOnly = function(desserts) {
  // Return call to _.filter given desserts array and a function given an object
   // that returns if each object's type is 'cookie'

  return _.filter(desserts, function(dessert) {
    return dessert['type'] === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.

// Problem - Complete sumTotal function, given an array of objects, that
  // returns the total sum price from all the objects.

// I - An array of objects with price properties
// O - A number sum of all price values
// C - Do not use a for loop
// E - None

// Strategy
  // Return call to _.reduce given the input array, an iterator function, and an
    // accumulator value (assigned to 0)
    // The iterator will return each price property value added to accumulator

var sumTotal = function(products) {
  // Return return value from function call to _.reduce, given input array,
  // an iterator, and an accumulator value (0)
    // call iterator with accumulator and each object element (as parameters)
      // and return price from each object added to accumulator
  return _.reduce(products, function(sum, product) {
    return sum += Number(product['price'].slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

// Problem: Complete the dessertCategories function by using _.reduce within to
  // return an object of dessert type properties with values of their quantity.

// I - An array of objects
// O - An object
// C - Don't use a for loop
// E - None

// Strategy
  // Return call to _.reduce given, input collection, new iterator, and an
    // accumulator object
  // iterator returns accumulator with the current object element's
    // type as a key and and increments its value by 1 each iteration

var dessertCategories = function(desserts) {
  // Return call to _.reduce with desserts array, new iterator, and an empty object
  // iterator:
    //
    // if current object element's type is not in accumulator object
      // add to accumulator as a property with a value of 1
    // otherwise (if current object is already in accumulator)
      // increment the current element's property value in accumulator by 1

  return _.reduce(desserts, function(dessertTypeCounts, dessert) {
    var dessertType = dessert.type;
    if (dessertTypeCounts[dessertType] === undefined) {
      dessertTypeCounts[dessertType] = 1;
    } else {
      dessertTypeCounts[dessertType]++;
    }
    return dessertTypeCounts;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

// Problem - Complete ninetiesKid function, given an array, that returns an
  // array of movies with a release date between 1990-2000.

// I - An array of objects
// O - An array of strings
// C - Don't make a for loop. Return new array.
// E - None

// Strategy
  // Return call to _.reduce given input array, new iterator, and an empty array
    // iterator will return accumulator array with movies from the 90s added

var ninetiesKid = function(movies) {
  // Return call to _.reduce given movies input, new iterator, and empty array
  // Iterator:
    // If in current object element, the release year property's value is between
    // 1990-2000
      // Return accumulator array with value of current object's title property
      // added.
  return _.reduce(movies, function(ninetiesMovies, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      var movieTitle = movie.title;
      ninetiesMovies.push(movieTitle);
    }
    return ninetiesMovies;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.// 120 minutes
// timeLimit is an integer representing a number of minutes.

// Problem - Complete the movieNIght function, given an array and a number, that
  // returns whether there is a movie in the input array that is less than the
  // input number.

// I - An array of objects and an integer
// O - Boolean
// C - Do not create for loop or new arrays
// E - None

// Strategy
  // Create variable for return value, assign to false
  // Call _.reduce given input array, new iterator, and boolean
    // accumulator set to initialized return value
  // Iterator will check each movie object's runtime property to see if it is
    // less than input time limit and return and update accumulator outside of
    // _.reduce

    // 2. MAYBE USE BREAK STATEMENT

var movieNight = function(movies, timeLimit) {
  // Create variable as runtime match, set to false
  // Call _.reduce with input array, new iterator, and NO ***accumulator as runtime
  // match variable.***
    // Iterator checks:
    // If current movie object's runtime property value is less than or equal
    // to input time limit
      // update runtime match variable to true
  // Return runtime match variable

  var hasRuntimeMatch = false;
  _.reduce(movies, function(accumulator, movie) {
    if (movie.runtime <= timeLimit) {
      hasRuntimeMatch = true;
    }
  });
  return hasRuntimeMatch;

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.

// Problem - Complete upperCaseFruits function, given an array, that returns an
  // array of values from input in all caps.

// I - An array of strings
// O - An array of strings from input in all caps
// C - Don't create for loops, new arrays, or return input array
// E - None

// Strategy
  // Return call to _.map, given input array and a new iterator that
    // converts and returns all elements to uppercase
var upperCaseFruits = function(fruits) {
  // Return call to _.map, given fruits and a new iterator function, given each
  // element from fruits that will
    // return current element converted to uppercase

  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

// Problem - Complete glutenFree function, given an array of objects,
  // that returns a new array of objects with a new gluten free
  // property whose value is the appropriate boolean.

// I - An array of objects
// O - An array of objects with new "gluten free" property
// C - Do not create new for loops, arrays, or return input array
// E - None

// Strategy
  // Return call to _.map, given input array and a new iterator
  // Iterator will
    // Copy dessert object into new variable
    // Check if copy's ingredients property array has 'flour'
    // If so, add gluten free property to copy with value of false
    // Otherwise, add gluten free property to copy with value of true
    // Return object copy

var glutenFree = function(desserts) {
  // Return call to _.map, given desserts and a new iterator function,
  // given each object element
    // (Iterator) Copy current dessert object into new variable
    // If copy's ingredients property value has 'flour'
      // Add gluten free property to copy with value of false
    // Otheriwise
      // Add gluten free property to copy with value of true
    // Return object copy

  return _.map(desserts, function(dessert) {
    var dessertCopy = dessert;
    if (dessertCopy.ingredients.includes('flour')) {
      dessertCopy.glutenFree = false;
    } else {
      dessertCopy.glutenFree = true;
    }
    return dessertCopy;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

// Problem - Complete applyCoupon function, given an array of objects and a
  // float number, that returns a new array of the input objects added with
  // a new sale price property with the value of the calculated sale price.

// I - An array of objects and a float number
// O - An array of objects updated from input
// C - Do not create new for loops or arrays or return input array
// E - None

// Strategy
  // Return call to _.map, given input array and a new iterator that,
  // given each product object,
    // Copies product object into new variable
    // Calculates the sale price with the copy's price property value
      // and input float discount
    // Adds sale price property to copy
    // Returns object copy

var applyCoupon = function(groceries, coupon) {
  // Return call to _.map, given groceries and new iterator function,
  // given each product object element
    // (Iterator) Copy product object into new variable
    // Create variable with product copy price
    // Add sale price property to copy with value of copy price
      // minus copy price times coupon
    // Return product copy

  return _.map(groceries, function(product) {
    var productCopy = product;
    // removing dollar sign and numberizing to do calculation:
    var price = Number(productCopy.price.slice(1)) * 100;
    var copySalePrice = ((price - (price * coupon)) / 100).toString();
    productCopy.salePrice = '$' + copySalePrice.slice(0, 4);
    return productCopy;
  });

};

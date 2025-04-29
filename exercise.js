// Numbers and Math

function add(a, b) {
  // Return the sum of two numbers
  return a + b
}

function square(n) {
  // Return the square of a number
  return n * n


}

function evenOrOdd(n) {
  // Return "even" if n is even, otherwise "odd"
  if (n % 2 === 0) 
    return "even";
  else
    return "odd";


}

function maxOfTwo(a, b) {
  // Return the larger of two numbers
  if (a > b) {
    return a;
  } else {
    return b;
  }

}

function multiplyList(numbers) {
  // Multiply all numbers in a list and return the result
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;


}

// Strings


function greet(name) {
  // Return "Hello, <name>!"
  return "Hello, " + name + "!";
}

function countLetters(word) {
  // Return the number of letters in the word
  return word.length;
}

function makeUppercase(s) {
  // Return the string in all uppercase letters
  return s.toUpperCase();

}

function repeatWord(word, times) {
  // Return the word repeated 'times' times
  let result = "";
  for (let i = 0; i < times; i++) {
    result += word;
  }
  return result;

}

function firstAndLast(s) {
  // Return the first and last character of the string
  if (s.length === 0) {
    return ""; // Return empty string if s is empty
  }
  return s.charAt(0) + s.charAt(s.length - 1);
}



// Lists
function addToList(lst, item) {
  // Add item to the end of the list and return the new list
  lst.push(item);
  return lst;
}

function firstItem(lst) {
  // Return the first item in the list
  if (lst.length === 0) {
    return null; // Return null if the list is empty
  }
  return lst[0];
}

function lastItem(lst) {
  // Return the last item in the list
  if (lst.length === 0) {
    return null; // Return null if the list is empty
  }
  return lst[lst.length - 1];
}

function sumList(lst) {
  // Return the sum of all numbers in the list
  let sum = 0;
  for (let i = 0; i < lst.length; i++) {
    sum += lst[i];
  }
  return sum;

}

function listLength(lst) {
  // Return how many items are in the list
  return lst.length;

}

function containsItem(lst, item) {
  // Return true if item is in the list
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === item) {
      return true;
    }
  }
  return false; // Return false if item is not found

}



// Logic and Conditions
function isEven(n) {
  // Return true if n is even
  return n % 2 === 0;
  
}

function isPositive(n) {
  // Return true if n is positive
  return n > 0;

}

function canVote(age) {
  // Return true if age is 18 or older
  return age >= 18;

}

function isWeekend(day) {
  // Return true if day is "Saturday" or "Sunday"
  return day === "Saturday" || day === "Sunday";
}

function isEmpty(s) {
  // Return true if the string is empty
  return s.length === 0;

}

function sameNumber(a, b) {
  // Return true if a and b are the same number
  return a === b;
}

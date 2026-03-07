
/* DECISION MAKING TASKS */



// 1️ Leap Year Checker
// This function checks if a year is a leap year
function isLeapYear(year) {

    // Leap year rule:
    // divisible by 4 AND not by 100
    // OR divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a Leap Year";
    } else {
        return year + " is NOT a Leap Year";
    }
}

// Example test
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));



// 2️ Ticket Pricing
// This function returns the ticket price based on age
function getTicketPrice(age) {

    // if age is 12 or less
    if (age <= 12) {
        return "Ticket price: $10 (Child)";
    }

    // if age is between 13 and 17
    else if (age >= 13 && age <= 17) {
        return "Ticket price: $15 (Teenager)";
    }

    // if age is 18 or more
    else {
        return "Ticket price: $20 (Adult)";
    }
}

// Example test
console.log(getTicketPrice(10));
console.log(getTicketPrice(15));
console.log(getTicketPrice(25));




// RECURSION TASKS



// 3️ Fibonacci Sequence
// Recursive function to calculate the nth Fibonacci number
function fibonacci(n) {

    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    // Fibonacci = sum of previous two numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example test
console.log("Fibonacci(6):", fibonacci(6));



// 4️ Palindrome Checker
// Recursive function to check if a string is a palindrome
function isPalindrome(str) {

    // Convert to lowercase and remove spaces/punctuation
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Base case: if string length <= 1 it is a palindrome
    if (str.length <= 1) {
        return true;
    }

    // If first and last characters are different
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case:
    // check the substring without first and last characters
    return isPalindrome(str.slice(1, -1));
}
    // 5 Power Function            
   function power(base, exponent) {
    if (exponent === 0) {
    return 1;
  }
    return base * power(base, exponent - 1);
}

// Example test
console.log("Is 'madam' palindrome?", isPalindrome("madam"));
console.log("Is 'hello' palindrome?", isPalindrome("hello"));
console.log("Is 'A man a plan a canal Panama' palindrome?", isPalindrome("A man a plan a canal Panama"));

// Power Function
console.log(power(2, 3)); // Output: 8
console.log(power(5, 0)); // Output: 1
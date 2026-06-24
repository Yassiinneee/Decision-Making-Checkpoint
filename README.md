# Decision Making & Recursion Checkpoint

## Overview

This project demonstrates the application of two fundamental programming concepts in JavaScript:

* **Decision Making** using conditional statements (`if`, `else if`, `else`)
* **Recursion** using functions that call themselves to solve problems

The goal of this checkpoint is to strengthen problem-solving skills and algorithmic thinking by implementing real-world examples of decision-making logic and recursive algorithms.

---

# Learning Objectives

By completing this project, you will be able to:

* Apply conditional logic to solve practical problems
* Understand and implement recursive functions
* Work with mathematical and string-based algorithms
* Write clean and readable JavaScript code
* Practice debugging and testing functions

---

# Implemented Tasks

## Decision Making

### 1. Leap Year Checker

A function that determines whether a given year is a leap year.

### Rules

A year is considered a leap year if:

* It is divisible by 4
* It is not divisible by 100

OR

* It is divisible by 400

### Examples

| Year | Result        |
| ---- | ------------- |
| 2024 | Leap Year     |
| 2023 | Not Leap Year |
| 2000 | Leap Year     |
| 1900 | Not Leap Year |

---

### 2. Ticket Pricing System

A function that calculates movie ticket prices according to age categories.

### Pricing Rules

| Age Range | Category | Price |
| --------- | -------- | ----- |
| 0 - 12    | Child    | $10   |
| 13 - 17   | Teenager | $15   |
| 18+       | Adult    | $20   |

### Examples

```javascript
getTicketPrice(10);
```

Output:

```text
Ticket price: $10 (Child)
```

```javascript
getTicketPrice(15);
```

Output:

```text
Ticket price: $15 (Teenager)
```

```javascript
getTicketPrice(25);
```

Output:

```text
Ticket price: $20 (Adult)
```

---

# Recursion

## 3. Fibonacci Sequence

A recursive function that calculates the nth Fibonacci number.

### Fibonacci Pattern

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
```

### Formula

```text
F(n) = F(n-1) + F(n-2)
```

### Example

```javascript
fibonacci(6);
```

Output:

```text
8
```

---

## 4. Palindrome Checker

A recursive function that checks whether a string reads the same forward and backward.

### Features

* Ignores spaces
* Ignores punctuation
* Ignores capitalization

### Examples

```javascript
isPalindrome("madam");
```

Output:

```text
true
```

```javascript
isPalindrome("hello");
```

Output:

```text
false
```

```javascript
isPalindrome("A man a plan a canal Panama");
```

Output:

```text
true
```

---

## 5. Power Function

A recursive function that calculates a number raised to a specific exponent.

### Formula

```text
base^exponent
```

### Examples

```javascript
power(2, 3);
```

Output:

```text
8
```

```javascript
power(5, 0);
```

Output:

```text
1
```

---

# Project Structure

```text
Decision-Making-Checkpoint/
│
├── decision.js
├── code execution.png
└── README.md
```

---

# Technologies Used

* JavaScript (ES6)
* Node.js
* Visual Studio Code

---

# How to Run the Project

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project Folder

```bash
cd Decision-Making-Checkpoint
```

### Run the Program

```bash
node decision.js
```

---

# Expected Console Output

```text
2024 is a Leap Year
2023 is NOT a Leap Year

Ticket price: $10 (Child)
Ticket price: $15 (Teenager)
Ticket price: $20 (Adult)

Fibonacci(6): 8

Is 'madam' palindrome? true
Is 'hello' palindrome? false
Is 'A man a plan a canal Panama' palindrome? true

8
1
```

---

# Key Concepts Demonstrated

## Decision Making

* if statements
* else if statements
* else statements
* logical operators
* comparison operators

## Recursion

* base cases
* recursive calls
* mathematical recursion
* string recursion
* divide-and-conquer thinking

---

# Educational Value

This checkpoint provides hands-on practice with essential programming concepts commonly used in software development interviews, algorithm challenges, and real-world applications.

The solutions focus on clarity, readability, and proper use of JavaScript fundamentals while demonstrating how recursion can simplify complex problems.

---

# Author

Yassine KLt

JavaScript Decision Making & Recursion Checkpoint

---

# License

This project is created for educational purposes and learning JavaScript fundamentals.

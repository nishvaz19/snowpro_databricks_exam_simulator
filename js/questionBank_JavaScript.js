const questionBank = [
  {
    id: 1,
    difficulty: "easy",
    category: "data_structures",
    question: "Which method is used to add one or more elements to the end of an array and returns the new length?",
    options: ["shift()", "pop()", "push()", "unshift()"],
    answer: 2,
    explanation: "push() adds to the end; unshift() adds to the beginning.",
    hint: "Think of pushing an item onto a stack."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "memory",
    question: "In JavaScript, how are Objects passed to functions?",
    options: ["By value", "By reference", "By name", "By bitwise copy"],
    answer: 1,
    explanation: "Objects are reference types. When passed to a function, the reference is copied, so modifying the object properties affects the original object.",
    hint: "If you change a property inside the function, does it stay changed outside?"
  },
  {
    id: 3,
    difficulty: "medium",
    category: "data_structures",
    question: "What is the primary difference between a Map and a WeakMap?",
    options: [
      "Maps can only store strings",
      "WeakMap keys must be objects and are weakly held (garbage collectable)",
      "WeakMaps are faster for iteration",
      "There is no difference"
    ],
    answer: 1,
    explanation: "WeakMap keys must be objects. If there are no other references to the key object, it can be garbage collected even if it is in the WeakMap.",
    hint: "Memory management and object keys."
  },
  {
    id: 4,
    difficulty: "hard",
    category: "data_structures",
    question: "Given 'const arr = [[1, 2], [3, 4]]', how do you access the number 4?",
    options: ["arr[1, 1]", "arr[1][1]", "arr[2][2]", "arr.get(1, 1)"],
    answer: 1,
    explanation: "JavaScript uses bracket notation for multi-dimensional arrays: the first index for the outer array and the second for the inner.",
    hint: "Row then column."
  },
  {
    id: 5,
    difficulty: "easy",
    category: "objects",
    question: "Which operator is used to check if a property exists in an object or its prototype chain?",
    options: ["exists", "has", "in", "instanceof"],
    answer: 2,
    explanation: "The 'in' operator returns true if the specified property is in the specified object or its prototype chain.",
    hint: "'property' ___ object"
  },
  {
    id: 6,
    difficulty: "medium",
    category: "globals",
    question: "What happens if you assign a value to a variable that has not been declared (without 'var', 'let', or 'const') in non-strict mode?",
    options: [
      "A ReferenceError is thrown",
      "The variable becomes a property of the global object",
      "The variable is scoped to the current function",
      "The variable is ignored"
    ],
    answer: 1,
    explanation: "In non-strict mode, assigning to an undeclared variable creates a 'global' variable (a property of 'window' or 'global').",
    hint: "Accidental globals."
  },
  {
    id: 7,
    difficulty: "hard",
    category: "functions",
    question: "In JavaScript, if two functions are defined with the same name in the same scope, what happens?",
    options: [
      "A syntax error is thrown",
      "The first definition is used",
      "The last definition overrides the previous ones",
      "They are overloaded based on arguments"
    ],
    answer: 2,
    explanation: "JavaScript does not support function overloading. The later definition replaces the earlier one.",
    hint: "The last one wins."
  },
  {
    id: 8,
    difficulty: "medium",
    category: "data_structures",
    question: "How do you remove duplicates from an array 'arr' using a built-in Data Structure?",
    options: [
      "new Map(arr)",
      "[...new Set(arr)]",
      "arr.filter(unique)",
      "new Object(arr)"
    ],
    answer: 1,
    explanation: "A Set only allows unique values. Spreading a Set into a new array is a common shorthand for de-duplication.",
    hint: "A collection of unique values."
  },
  {
    id: 9,
    difficulty: "easy",
    category: "memory",
    question: "What is the result of 'let a = 5; let b = a; b = 10;'? What is 'a'?",
    options: ["10", "5", "undefined", "null"],
    answer: 1,
    explanation: "Primitives (numbers, strings) are passed by value. Changing 'b' does not affect 'a'.",
    hint: "Value vs Reference."
  },
  {
    id: 10,
    difficulty: "hard",
    category: "data_structures",
    question: "Which array method is best suited for transforming an array of arrays into a single flat array?",
    options: ["map()", "reduce()", "flat()", "concat()"],
    answer: 2,
    explanation: "The flat() method (ES2019) creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.",
    hint: "Flattening the structure."
  },
  {
    id: 11,
    difficulty: "medium",
    category: "objects",
    question: "What does 'Object.freeze()' do?",
    options: [
      "Prevents adding properties but allows modification of existing ones",
      "Prevents any changes to an object (read-only)",
      "Speeds up object access",
      "Encrypts the object"
    ],
    answer: 1,
    explanation: "Object.freeze() makes an object immutable: you cannot add, delete, or change properties.",
    hint: "Total immutability."
  },
  {
    id: 12,
    difficulty: "medium",
    category: "logic",
    question: "What is 'Hoisting' in JavaScript?",
    options: [
      "A way to deploy code",
      "Variable and function declarations are moved to the top of their containing scope during compilation",
      "A performance optimization for loops",
      "A method for garbage collection"
    ],
    answer: 1,
    explanation: "Hoisting allows functions and 'var' variables to be used before they are declared in the code.",
    hint: "Moving to the top."
  },
  {
    id: 13,
    difficulty: "easy",
    category: "data_structures",
    question: "Which of these is NOT a valid way to iterate over an array?",
    options: ["for...in", "for...of", "forEach()", "iterate()"],
    answer: 3,
    explanation: "iterate() is not a built-in array method. for...in is usually used for objects, but works on indices.",
    hint: "Check the standard methods."
  },
  {
    id: 14,
    difficulty: "hard",
    category: "memory",
    question: "If 'const obj1 = {a: 1}; const obj2 = obj1;', what happens when you do 'obj2.a = 2'?",
    options: [
      "obj1.a remains 1",
      "obj1.a becomes 2",
      "An error is thrown because of 'const'",
      "A new object is created"
    ],
    answer: 1,
    explanation: "obj2 and obj1 point to the same memory address. 'const' prevents reassignment of the variable, not modification of the object content.",
    hint: "Shared reference."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "data_structures",
    question: "What is the value of 'typeof []'?",
    options: ["'array'", "'object'", "'list'", "'undefined'"],
    answer: 1,
    explanation: "In JavaScript, arrays are technically objects.",
    hint: "The quirk of typeof."
  },
  {
    id: 16,
    difficulty: "medium",
    category: "objects",
    question: "How do you perform a shallow copy of an object?",
    options: [
      "Object.assign({}, original)",
      "{...original}",
      "Both are correct",
      "JSON.parse(JSON.stringify(original))"
    ],
    answer: 2,
    explanation: "Both Object.assign and the spread operator create shallow copies. JSON methods create a deep copy.",
    hint: "New object, same nested references."
  },
  {
    id: 17,
    difficulty: "hard",
    category: "functions",
    question: "What is a 'Closure'?",
    options: [
      "Closing a browser tab",
      "A function that has access to its outer function scope even after the outer function has returned",
      "A way to end a loop",
      "Private class variables"
    ],
    answer: 1,
    explanation: "Closures allow a function to 'remember' the environment in which it was created.",
    hint: "Lexical scoping."
  },
  {
    id: 18,
    difficulty: "easy",
    category: "data_structures",
    question: "Which method converts all elements of an array into a string, separated by a comma or a specified separator?",
    options: ["toString()", "join()", "concat()", "pop()"],
    answer: 1,
    explanation: "join() allows you to specify a separator (e.g., join('-')), whereas toString() always uses commas.",
    hint: "Glueing elements together."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "data_structures",
    question: "In a Map, what can be used as a key?",
    options: ["Only strings", "Only objects", "Any value (including functions, objects, or primitives)", "Only numbers"],
    answer: 2,
    explanation: "Maps are more flexible than Objects because keys can be any data type.",
    hint: "Universal key support."
  },
  {
    id: 20,
    difficulty: "hard",
    category: "scenarios",
    question: "You have an array of 1 million objects. Which iteration method is generally fastest in modern V8 engines?",
    options: ["forEach()", "for...of", "Simple for loop (let i=0...)", "map()"],
    answer: 2,
    explanation: "A standard 'for' loop avoids function call overhead for every element, making it slightly faster for massive datasets.",
    hint: "Classic index-based iteration."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "memory",
    question: "What is the 'Temporal Dead Zone'?",
    options: [
      "The time before a variable declared with 'let' or 'const' is initialized",
      "A period where the garbage collector runs",
      "When the server is unresponsive",
      "The time it takes for a promise to resolve"
    ],
    answer: 0,
    explanation: "Accessing a 'let' or 'const' variable before its declaration line results in a ReferenceError because of the TDZ.",
    hint: "Before the initialization."
  },
  {
    id: 22,
    difficulty: "easy",
    category: "objects",
    question: "How do you access the 'name' property of 'obj' using a variable 'key = \"name\"'?",
    options: ["obj.key", "obj[key]", "obj.getName()", "obj->key"],
    answer: 1,
    explanation: "Bracket notation is required when the property name is stored in a variable.",
    hint: "Dynamic access."
  },
  {
    id: 23,
    difficulty: "hard",
    category: "data_structures",
    question: "What is the result of '[1, 2, 3] + [4, 5, 6]'?",
    options: ["[1, 2, 3, 4, 5, 6]", "'1,2,34,5,6'", "Error", "undefined"],
    answer: 1,
    explanation: "JavaScript converts arrays to strings and concatenates them when using the '+' operator.",
    hint: "Type coercion weirdness."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "functions",
    question: "What is the 'arguments' object in a function?",
    options: [
      "A list of reasons why the function failed",
      "An array-like object containing all values passed to the function",
      "A global variable for all functions",
      "The same as 'this'"
    ],
    answer: 1,
    explanation: "The 'arguments' object is available inside non-arrow functions and contains the values of the arguments passed.",
    hint: "Implicit parameter list."
  },
  {
    id: 25,
    difficulty: "hard",
    category: "logic",
    question: "What is the difference between '==' and '==='?",
    options: [
      "'==' checks value only (with coercion); '===' checks value and type",
      "They are identical",
      "'===' is for objects only",
      "'==' is faster"
    ],
    answer: 0,
    explanation: "Strict equality (===) does not perform type conversion.",
    hint: "Strict vs Loose."
  },
  {
    id: 26,
    difficulty: "medium",
    category: "data_structures",
    question: "Which method checks if all elements in an array pass a specific test?",
    options: ["some()", "every()", "filter()", "find()"],
    answer: 1,
    explanation: "every() returns true if every element satisfies the condition; some() returns true if at least one does.",
    hint: "Universal requirement."
  },
  {
    id: 27,
    difficulty: "easy",
    category: "data_structures",
    question: "How do you find the index of an element in an array?",
    options: ["find()", "indexOf()", "search()", "locate()"],
    answer: 1,
    explanation: "indexOf() returns the first index at which a given element can be found.",
    hint: "Position of value."
  },
  {
    id: 28,
    difficulty: "hard",
    category: "memory",
    question: "What is a 'Memory Leak' in JavaScript?",
    options: [
      "When the RAM is physically leaking",
      "When objects are no longer needed but the garbage collector cannot remove them because they are still referenced",
      "When the code is too long",
      "When you use too many global variables"
    ],
    answer: 1,
    explanation: "Uncleared intervals, global variables, and closures holding large objects are common causes of leaks.",
    hint: "Unintended references."
  },
  {
    id: 29,
    difficulty: "medium",
    category: "globals",
    question: "What is the global object in a browser environment?",
    options: ["global", "window", "document", "screen"],
    answer: 1,
    explanation: "In browsers, 'window' is the global object. In Node.js, it is 'global'.",
    hint: "The browser window."
  },
  {
    id: 30,
    difficulty: "hard",
    category: "data_structures",
    question: "What does 'Array.prototype.slice(1, 3)' return for '[A, B, C, D]'?",
    options: ["[B, C]", "[B, C, D]", "[A, B]", "[C, D]"],
    answer: 0,
    explanation: "Slice starts at index 1 and ends *before* index 3 (exclusive).",
    hint: "Start is inclusive, End is exclusive."
  },
  {
    id: 31,
    difficulty: "medium",
    category: "objects",
    question: "How do you delete a property 'age' from an object 'user'?",
    options: ["user.age = null", "delete user.age", "remove user.age", "user.pop('age')"],
    answer: 1,
    explanation: "The 'delete' operator removes a property from an object entirely.",
    hint: "The specific operator for removal."
  },
  {
    id: 32,
    difficulty: "easy",
    category: "data_structures",
    question: "What is the length of '[1, , 3]'?",
    options: ["2", "3", "undefined", "1"],
    answer: 1,
    explanation: "Empty slots (elisions) still count towards the array's length.",
    hint: "Counting the holes."
  },
  {
    id: 33,
    difficulty: "hard",
    category: "functions",
    question: "What is the behavior of an 'Arrow Function' regarding the 'this' keyword?",
    options: [
      "It has its own 'this' binding",
      "It inherits 'this' from its parent lexical scope",
      "It makes 'this' null",
      "It points 'this' to the global object"
    ],
    answer: 1,
    explanation: "Arrow functions do not have their own 'this'. They capture the 'this' value of the enclosing context.",
    hint: "Lexical 'this'."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "data_structures",
    question: "What is the purpose of 'Array.isArray()'?",
    options: [
      "To check if an object is an array",
      "To convert an object to an array",
      "To check the length of an array",
      "To create a new array"
    ],
    answer: 0,
    explanation: "Because 'typeof []' is 'object', Array.isArray() is the reliable way to distinguish arrays from other objects.",
    hint: "Reliable type checking."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "data_structures",
    question: "What is the result of 'new Set([1, 1, 2, 2, 3]).size'?",
    options: ["5", "3", "2", "undefined"],
    answer: 1,
    explanation: "Sets only store unique values; duplicates are ignored.",
    hint: "Uniqueness counts."
  },
  {
    id: 36,
    difficulty: "medium",
    category: "memory",
    question: "What is 'Pass by Sharing' (used by JS for objects)?",
    options: [
      "The same as pass by value",
      "The same as pass by reference",
      "The value of the reference is passed by value",
      "Variables are shared on a server"
    ],
    answer: 2,
    explanation: "Technically, the pointer (reference) is passed by value. You can change the object's properties, but reassigning the parameter inside the function won't change the outside variable.",
    hint: "Reassigning vs Modifying."
  },
  {
    id: 37,
    difficulty: "easy",
    category: "data_structures",
    question: "Which method adds elements to the beginning of an array?",
    options: ["push()", "unshift()", "shift()", "pop()"],
    answer: 1,
    explanation: "unshift() adds to the front; shift() removes from the front.",
    hint: "Opposite of push."
  },
  {
    id: 38,
    difficulty: "medium",
    category: "objects",
    question: "What does 'Object.keys(obj)' return?",
    options: [
      "A string of all keys",
      "An array of the object's own enumerable string-keyed property names",
      "The values of the object",
      "The number of properties"
    ],
    answer: 1,
    explanation: "It returns an array of strings representing the keys.",
    hint: "List of property names."
  },
  {
    id: 39,
    difficulty: "hard",
    category: "data_structures",
    question: "In the 'reduce(callback, initialValue)' method, what happens if no initialValue is provided?",
    options: [
      "An error is thrown",
      "The first element of the array is used as the initial accumulator value",
      "The accumulator starts as 0",
      "The accumulator starts as undefined"
    ],
    answer: 1,
    explanation: "If no initialValue is provided, reduce() skips the first element and uses it as the initial accumulator.",
    hint: "Starting point of reduction."
  },
  {
    id: 40,
    difficulty: "medium",
    category: "logic",
    question: "What is 'Short-circuiting' in logical operators?",
    options: [
      "When the code crashes",
      "When the evaluation of a logical expression stops as soon as the result is determined (e.g., 'true || ...')",
      "A way to write faster code",
      "A type of bitwise operation"
    ],
    answer: 1,
    explanation: "In 'A && B', if A is false, B is never evaluated. In 'A || B', if A is true, B is never evaluated.",
    hint: "Stopping early."
  },
  {
    id: 41,
    difficulty: "hard",
    category: "objects",
    question: "What is the difference between 'Object.seal()' and 'Object.freeze()'?",
    options: [
      "Sealing prevents adding/deleting properties but allows modifying existing ones; Freezing prevents all three",
      "Freezing is for arrays; Sealing is for objects",
      "There is no difference",
      "Sealing is faster"
    ],
    answer: 0,
    explanation: "Seal = no add/remove, yes edit. Freeze = no add/remove/edit.",
    hint: "Degrees of restriction."
  },
  {
    id: 42,
    difficulty: "easy",
    category: "data_structures",
    question: "What is the index of the last element in an array 'arr'?",
    options: ["arr.length", "arr.length - 1", "arr.last", "arr[end]"],
    answer: 1,
    explanation: "Arrays are zero-indexed, so the last element is at length - 1.",
    hint: "Zero-based counting."
  },
  {
    id: 43,
    difficulty: "medium",
    category: "functions",
    question: "What does the 'bind()' method do?",
    options: [
      "Immediately calls the function",
      "Creates a new function that, when called, has its 'this' keyword set to the provided value",
      "Deletes a function",
      "Combines two functions"
    ],
    answer: 1,
    explanation: "Unlike call() or apply(), bind() does not execute the function immediately; it returns a new bound function.",
    hint: "Pre-setting 'this'."
  },
  {
    id: 44,
    difficulty: "hard",
    category: "memory",
    question: "Which of these is a 'primitive' type in JavaScript?",
    options: ["Array", "Symbol", "Map", "Object"],
    answer: 1,
    explanation: "Primitives include: string, number, bigint, boolean, undefined, symbol, and null.",
    hint: "The basic building blocks."
  },
  {
    id: 45,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to create a key-value store where the values are frequently updated but you don't know the keys in advance. Should you use an Object or a Map?",
    options: [
      "Object, because it's simpler",
      "Map, because it performs better in scenarios involving frequent additions/removals and allows any key type",
      "Object, because it's faster for lookups",
      "Map, because it uses less memory"
    ],
    answer: 1,
    explanation: "Maps are specifically optimized for dynamic key-value pairs.",
    hint: "Dynamic vs Static keys."
  },
  {
    id: 46,
    difficulty: "hard",
    category: "data_structures",
    question: "What is the complexity of searching for an element in an unsorted Array vs a Set?",
    options: ["Array: O(1), Set: O(n)", "Array: O(n), Set: O(1)", "Both are O(n)", "Both are O(1)"],
    answer: 1,
    explanation: "Sets use hash tables for O(1) lookups, while Arrays must be iterated (O(n)).",
    hint: "Hashing vs Iteration."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "globals",
    question: "What is 'use strict'?",
    options: [
      "A mode that makes JavaScript faster",
      "A directive that enforces stricter parsing and error handling in your code",
      "A way to disable functions",
      "A new version of JavaScript"
    ],
    answer: 1,
    explanation: "Strict mode catches common coding bloopers and prevents the use of certain 'bad' features (like accidental globals).",
    hint: "Cleaner code rules."
  },
  {
    id: 48,
    difficulty: "easy",
    category: "logic",
    question: "What is the result of '!!\"hello\"'?",
    options: ["false", "true", "\"hello\"", "Error"],
    answer: 1,
    explanation: "The double bang (!!) is a shorthand to convert a value to its boolean equivalent. Non-empty strings are truthy.",
    hint: "Boolean conversion."
  },
  {
    id: 49,
    difficulty: "hard",
    category: "data_structures",
    question: "Which method would you use to create a new array containing only elements that satisfy a condition?",
    options: ["map()", "filter()", "forEach()", "reduce()"],
    answer: 1,
    explanation: "filter() creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test.",
    hint: "Picking specific items."
  },
  {
    id: 50,
    difficulty: "medium",
    category: "objects",
    question: "What is 'Prototypal Inheritance'?",
    options: [
      "Inheriting from a parent class using 'extends'",
      "An object inheriting properties and methods from another object via its prototype link",
      "A way to copy objects",
      "Inheriting from a server"
    ],
    answer: 1,
    explanation: "Nearly all objects in JavaScript have a prototype from which they inherit methods (like .toString()).",
    hint: "The chain of objects."
  },
  {
    id: 51,
    difficulty: "medium",
    category: "versioning",
    question: "Which ECMAScript version introduced 'let', 'const', and Arrow Functions?",
    options: ["ES5 (2009)", "ES6 (2015)", "ES2017", "ES3"],
    answer: 1,
    explanation: "ES6, also known as ES2015, was a major update that introduced modern syntax like block-scoped variables and arrow functions.",
    hint: "The year was 2015."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "functions",
    question: "In JavaScript, if you define 'function sum(a, b)' and later define 'function sum(a, b, c)', what happens when you call 'sum(1, 2)'?",
    options: [
      "It calls the first function",
      "It calls the second function, and 'c' is undefined",
      "It throws a MultipleDefinitionError",
      "It uses the one with the matching number of arguments"
    ],
    answer: 1,
    explanation: "JavaScript does not support traditional overloading. The second definition completely overwrites the first.",
    hint: "Last definition wins."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "scoping",
    question: "What is the scope of a variable declared with 'var' inside a function?",
    options: ["Global", "Block-scoped", "Function-scoped", "Local to the nearest loop"],
    answer: 2,
    explanation: "'var' is function-scoped. Unlike 'let', it ignores block boundaries like 'if' or 'for' blocks.",
    hint: "Function vs Block."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "logic",
    question: "What is the result of '0 == false' and '0 === false'?",
    options: ["true, true", "true, false", "false, false", "false, true"],
    answer: 1,
    explanation: "Loose equality (==) coerces 0 to false. Strict equality (===) sees different types (number vs boolean).",
    hint: "Type coercion in loose equality."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "functions",
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    options: [
      "A function that calls itself once it's defined",
      "A function that repeats indefinitely",
      "A built-in JavaScript library",
      "A way to rename variables"
    ],
    answer: 0,
    explanation: "An IIFE is a function that runs as soon as it is defined, often used to create a private scope.",
    hint: "(function(){...})();"
  },
  {
    id: 56,
    difficulty: "hard",
    category: "versioning",
    question: "Which feature was introduced in ES2020 (ES11)?",
    options: ["Classes", "Promises", "Nullish Coalescing Operator (??)", "Template Literals"],
    answer: 2,
    explanation: "The ?? operator and Optional Chaining (?.) were major additions in the ES2020 specification.",
    hint: "Handling null/undefined specifically."
  },
  {
    id: 57,
    difficulty: "medium",
    category: "objects",
    question: "What is the difference between 'Object.values()' and 'Object.entries()'?",
    options: [
      "values() returns keys; entries() returns values",
      "values() returns an array of values; entries() returns an array of [key, value] pairs",
      "There is no difference",
      "entries() is only for Maps"
    ],
    answer: 1,
    explanation: "Object.entries() provides both the property name and the value in a nested array format.",
    hint: "Pairs vs simple list."
  },
  {
    id: 58,
    difficulty: "hard",
    category: "closures",
    question: "What will be printed? 'for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1); }'",
    options: ["0, 1, 2", "3, 3, 3", "undefined, undefined, undefined", "1, 2, 3"],
    answer: 1,
    explanation: "Because 'var' is function-scoped, all timeouts refer to the same 'i', which is 3 when the loop finishes. Using 'let' would fix this.",
    hint: "Closures and 'var' scoping."
  },
  {
    id: 59,
    difficulty: "easy",
    category: "strings",
    question: "How do you perform string interpolation in ES6?",
    options: ["'Hello ' + name", "Using backticks: `Hello ${name}`", "\"Hello ${name}\"", "str.interpolate(name)"],
    answer: 1,
    explanation: "Template literals (backticks) allow embedding expressions inside strings using the ${} syntax.",
    hint: "The character below the Esc key."
  },
  {
    id: 60,
    difficulty: "hard",
    category: "hoisting",
    question: "What happens if you call a function expression before it is defined? e.g., 'myFunc(); const myFunc = () => {};'",
    options: [
      "It works due to hoisting",
      "ReferenceError",
      "TypeError",
      "It returns undefined"
    ],
    answer: 1,
    explanation: "Variables declared with 'const' or 'let' are hoisted but not initialized (TDZ), resulting in a ReferenceError.",
    hint: "Hoisting of 'const' vs 'function' declarations."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "data_structures",
    question: "How do you check if a value is 'NaN' reliably?",
    options: ["value == NaN", "value === NaN", "Number.isNaN(value)", "typeof value === 'nan'"],
    answer: 2,
    explanation: "NaN is the only value in JS that is not equal to itself. Number.isNaN() is the standard check.",
    hint: "NaN !== NaN."
  },
  {
    id: 62,
    difficulty: "hard",
    category: "versioning",
    question: "What does the ES2017 'Object.getOwnPropertyDescriptors()' do?",
    options: [
      "Returns all keys of an object",
      "Returns all property descriptors (value, writable, enumerable, configurable) for all own properties",
      "Deletes all properties",
      "Copies an object"
    ],
    answer: 1,
    explanation: "It is useful for deep cloning and properly copying getters/setters between objects.",
    hint: "Metadata about properties."
  },
  {
    id: 63,
    difficulty: "medium",
    category: "logic",
    question: "What is the result of 'false || 0 || \"hello\"'?",
    options: ["false", "0", "\"hello\"", "true"],
    answer: 2,
    explanation: "The OR (||) operator returns the first 'truthy' value it encounters.",
    hint: "Seeking truth."
  },
  {
    id: 64,
    difficulty: "hard",
    category: "functions",
    question: "What is a 'Pure Function'?",
    options: [
      "A function that doesn't use variables",
      "A function that, given the same input, always returns the same output and has no side effects",
      "A function written in TypeScript",
      "A function that only uses 'let'"
    ],
    answer: 1,
    explanation: "Pure functions are predictable and do not modify external state (like global variables or the DOM).",
    hint: "Predictability and No Side Effects."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to merge two objects '{a: 1}' and '{b: 2}' into a new one. Which is the ES6 way?",
    options: ["Object.merge(obj1, obj2)", "{...obj1, ...obj2}", "obj1 + obj2", "new Object(obj1, obj2)"],
    answer: 1,
    explanation: "The spread operator (...) provides a clean syntax for shallow-merging objects.",
    hint: "Spreading properties."
  },
  {
    id: 66,
    difficulty: "hard",
    category: "logic",
    question: "What is the value of 'typeof null'?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    answer: 2,
    explanation: "This is a well-known legacy bug in JavaScript; null is considered an object by typeof.",
    hint: "A historical quirk."
  },
  {
    id: 67,
    difficulty: "medium",
    category: "versioning",
    question: "What does the 'Exponentiation Operator' (**) do?",
    options: [
      "Multiplies a number twice",
      "Computes the base to the exponent power (equivalent to Math.pow)",
      "It is a bitwise operator",
      "It checks for equality"
    ],
    answer: 1,
    explanation: "Introduced in ES2016, 2 ** 3 equals 8.",
    hint: "Power of."
  },
  {
    id: 68,
    difficulty: "hard",
    category: "objects",
    question: "What is the difference between 'in' operator and 'hasOwnProperty'?",
    options: [
      "They are the same",
      "'in' checks the prototype chain; 'hasOwnProperty' only checks the object's own properties",
      "'hasOwnProperty' is faster",
      "'in' is for arrays only"
    ],
    answer: 1,
    explanation: "If you want to ignore inherited properties (like .toString), use hasOwnProperty.",
    hint: "Prototype chain awareness."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "functions",
    question: "What is 'Partial Application'?",
    options: [
      "Fixing a number of arguments to a function, producing another function of smaller arity",
      "Calling a function halfway",
      "A function that returns a boolean",
      "Using only half the code"
    ],
    answer: 0,
    explanation: "It's a functional programming technique often achieved via .bind() or closures.",
    hint: "Pre-filling arguments."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "memory",
    question: "What is the 'Stack' vs the 'Heap' in JS memory management?",
    options: [
      "Stack is for large objects; Heap is for variables",
      "Stack is for primitive values and function calls; Heap is for objects and dynamic memory",
      "They are the same",
      "Stack is for Node.js; Heap is for Browser"
    ],
    answer: 1,
    explanation: "The Stack is fast and structured; the Heap is larger and used for unordered data like objects.",
    hint: "Memory organization."
  },
  {
    id: 71,
    difficulty: "medium",
    category: "versioning",
    question: "What is 'Optional Chaining' (?.)?",
    options: [
      "A way to make code optional",
      "Allows reading the value of a property deep within a chain of objects without having to check if each link is valid",
      "A way to link CSS and JS",
      "A type of loop"
    ],
    answer: 1,
    explanation: "If any part of the chain is null or undefined, it short-circuits and returns undefined instead of throwing an error.",
    hint: "Safe deep-property access."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "scoping",
    question: "What is 'Shadowing' in JavaScript?",
    options: [
      "Hiding the screen",
      "A variable declared in an inner scope having the same name as a variable in an outer scope",
      "A CSS property",
      "A performance bug"
    ],
    answer: 1,
    explanation: "The inner variable 'shadows' the outer one, making the outer one inaccessible within that scope.",
    hint: "Same name, different scope."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "logic",
    question: "What does the '??' (Nullish Coalescing) operator do?",
    options: [
      "Returns the right side if the left side is 'falsy'",
      "Returns the right side ONLY if the left side is null or undefined",
      "Compares two numbers",
      "Checks for errors"
    ],
    answer: 1,
    explanation: "Unlike ||, the ?? operator allows '0' and 'false' to be treated as valid values.",
    hint: "Precision over falsiness."
  },
  {
    id: 74,
    difficulty: "hard",
    category: "functions",
    question: "What is 'Currying'?",
    options: [
      "A way to flavor code",
      "Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument",
      "A type of recursion",
      "Sorting an array"
    ],
    answer: 1,
    explanation: "f(a, b, c) becomes f(a)(b)(c).",
    hint: "Chain of single-argument functions."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "objects",
    question: "How do you create an object that has no prototype?",
    options: ["{}", "new Object()", "Object.create(null)", "Object.clear()"],
    answer: 2,
    explanation: "Object.create(null) creates a truly empty object that doesn't even have .toString() or .hasOwnProperty().",
    hint: "Zero inheritance."
  },
  {
    id: 76,
    difficulty: "hard",
    category: "versioning",
    question: "What is 'Destructuring Assignment'?",
    options: [
      "Breaking a computer",
      "A syntax that allows unpacking values from arrays or properties from objects into distinct variables",
      "Deleting variables",
      "Converting JS to JSON"
    ],
    answer: 1,
    explanation: "Example: const { name, age } = user;",
    hint: "Unpacking data."
  },
  {
    id: 77,
    difficulty: "medium",
    category: "scoping",
    question: "Are 'let' and 'const' variables attached to the 'window' object in a browser?",
    options: ["Yes", "No", "Only if they are global", "Only 'let' is"],
    answer: 1,
    explanation: "Unlike 'var', global 'let' and 'const' declarations do not become properties of the global window object.",
    hint: "Polluting the global namespace."
  },
  {
    id: 78,
    difficulty: "hard",
    category: "logic",
    question: "What is the result of '[] == ![]'?",
    options: ["true", "false", "TypeError", "undefined"],
    answer: 0,
    explanation: "This is a complex coercion: ![] is false. [].toString() is empty string. Empty string == false is true.",
    hint: "JS coercion logic."
  },
  {
    id: 79,
    difficulty: "medium",
    category: "functions",
    question: "What is the difference between 'call()' and 'apply()'?",
    options: [
      "call() takes arguments as a list; apply() takes them as an array",
      "apply() is faster",
      "call() is only for strings",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Both change 'this', but 'apply' takes an Array as the second argument.",
    hint: "A for Array, C for Comma-separated."
  },
  {
    id: 80,
    difficulty: "hard",
    category: "versioning",
    question: "What is a 'Generator Function'?",
    options: [
      "A function that creates other functions",
      "A function that can be exited and later re-entered, maintaining its context (using 'yield')",
      "A function that generates random numbers",
      "A way to speed up loops"
    ],
    answer: 1,
    explanation: "Generators return an Iterator object and use the function* syntax.",
    hint: "Pause and resume."
  },
  {
    id: 81,
    difficulty: "medium",
    category: "objects",
    question: "What does 'Object.preventExtensions()' do?",
    options: [
      "Prevents adding new properties to an object",
      "Prevents modifying properties",
      "Prevents the object from being deleted",
      "Speeds up the object"
    ],
    answer: 0,
    explanation: "It stops new properties from being added but existing ones can still be modified or deleted.",
    hint: "No new keys."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "logic",
    question: "What is 'Bitwise NOT' (~) of -1?",
    options: ["-2", "0", "1", "-1"],
    answer: 1,
    explanation: "The formula for ~x is -(x + 1). So ~(-1) is -(-1 + 1) = 0.",
    hint: "-(n + 1)."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "functions",
    question: "What is 'Function Composition'?",
    options: [
      "Combining two or more functions to produce a new function",
      "Writing a function inside a function",
      "Sorting functions",
      "Deleting functions"
    ],
    answer: 0,
    explanation: "The output of one function becomes the input of the next: f(g(x)).",
    hint: "Chaining logic."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "versioning",
    question: "What are 'Tagged Template Literals'?",
    options: [
      "Strings with HTML tags",
      "A way to call a function by passing a template literal as an argument",
      "A library for templates",
      "A security feature"
    ],
    answer: 1,
    explanation: "Commonly used in libraries like 'styled-components' to process strings.",
    hint: "Function call without parentheses."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you swap two variables 'a' and 'b' without a temporary variable in ES6?",
    options: ["a = b; b = a;", "[a, b] = [b, a];", "a.swap(b);", "a += b; b = a - b; a -= b;"],
    answer: 1,
    explanation: "Array destructuring makes swapping variables concise and readable.",
    hint: "Destructuring swap."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "objects",
    question: "What is the 'Prototype' property of a function?",
    options: [
      "The function's parent",
      "An object that will be the prototype of any instances created with 'new' using that function",
      "A list of arguments",
      "The function's source code"
    ],
    answer: 1,
    explanation: "This is how constructor functions implement inheritance.",
    hint: "Blueprints for instances."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "logic",
    question: "What is the result of 'typeof NaN'?",
    options: ["'nan'", "'number'", "'undefined'", "'object'"],
    answer: 1,
    explanation: "Technically, 'Not-a-Number' is a numeric type in JavaScript.",
    hint: "It's still a number type."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "closures",
    question: "Can an inner function access variables of its outer function even after the outer function has finished executing?",
    options: ["Yes, this is a closure", "No", "Only if variables are global", "Only if the function is an arrow function"],
    answer: 0,
    explanation: "The closure 'closes over' the variable environment, preserving it in memory.",
    hint: "Persistent scope."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "versioning",
    question: "Which keyword is used to export a single value from a module as the default?",
    options: ["export", "export default", "module.exports", "export.main"],
    answer: 1,
    explanation: "ES Modules use 'export default' for the primary export of a file.",
    hint: "Default export syntax."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to find an element in an array of objects by a property value. Which method is most efficient?",
    options: ["filter()", "find()", "map()", "forEach()"],
    answer: 1,
    explanation: "find() stops execution as soon as the first match is found, whereas filter() scans the entire array.",
    hint: "Short-circuiting the search."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "objects",
    question: "What is 'Property Shorthand' in ES6?",
    options: [
      "Using 'p' for 'property'",
      "Writing '{ name }' instead of '{ name: name }' when the variable name matches the key",
      "A way to shorten code",
      "Deleting properties"
    ],
    answer: 1,
    explanation: "If the key and variable name are the same, you can omit the colon and value.",
    hint: "Concise object creation."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "functions",
    question: "What is the 'this' value in a global function in strict mode?",
    options: ["window", "undefined", "null", "global"],
    answer: 1,
    explanation: "In non-strict mode, it's 'window'; in strict mode, it is 'undefined' to prevent accidental global modifications.",
    hint: "Security in strict mode."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "logic",
    question: "What is the result of '[] + {}'?",
    options: ["'[object Object]'", "0", "undefined", "NaN"],
    answer: 0,
    explanation: "Array is coerced to empty string, Object is coerced to string '[object Object]'. Sum is the concatenated string.",
    hint: "String coercion sum."
  },
  {
    id: 94,
    difficulty: "hard",
    category: "versioning",
    question: "What does the 'rest parameter' (...) do in a function definition?",
    options: [
      "Spreads an array into arguments",
      "Collects all remaining arguments into an array",
      "Deletes the arguments",
      "Makes the function go to sleep"
    ],
    answer: 1,
    explanation: "The rest parameter must be the last parameter in the list.",
    hint: "Collecting inputs."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "memory",
    question: "How can you trigger Garbage Collection manually in a standard browser environment?",
    options: ["gc()", "window.collect()", "It is not possible", "delete window"],
    answer: 2,
    explanation: "Garbage collection is automatic and handled by the engine's heuristics. Manual triggers are usually only available in specific debug modes or Node.js with flags.",
    hint: "Automatic memory management."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "logic",
    question: "What is 'Duck Typing'?",
    options: [
      "A type for ducks",
      "The practice of determining if an object can be used for a particular purpose based on its properties/methods rather than its class",
      "A bug in JavaScript",
      "Typing very fast"
    ],
    answer: 1,
    explanation: "'If it walks like a duck and quacks like a duck, it's a duck.'",
    hint: "Behavior-based types."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "objects",
    question: "What is 'Computed Property Names' in ES6?",
    options: [
      "Properties that calculate values",
      "Using an expression in brackets as a property name during object literal creation",
      "Properties for numbers",
      "Object math"
    ],
    answer: 1,
    explanation: "Example: const obj = { [dynamicKey]: 'value' };",
    hint: "Brackets in literals."
  },
  {
    id: 98,
    difficulty: "hard",
    category: "functions",
    question: "What is the difference between a function declaration and a function expression?",
    options: [
      "Declarations are hoisted; expressions are not",
      "Expressions are faster",
      "Declarations cannot have arguments",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Function declarations are available throughout the scope, while expressions only exist after the line they are defined.",
    hint: "Hoisting behavior."
  },
  {
    id: 99,
    difficulty: "medium",
    category: "versioning",
    question: "What is 'Proxy' in ES6?",
    options: [
      "A networking tool",
      "An object that wraps another object and allows you to intercept and redefine fundamental operations (like getting properties)",
      "A backup server",
      "A way to hide code"
    ],
    answer: 1,
    explanation: "Proxies are powerful for validation, logging, and data binding (like in Vue.js 3).",
    hint: "Interception layer."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "logic",
    question: "What is the result of '1 < 2 < 3' and '3 > 2 > 1'?",
    options: ["true, true", "true, false", "false, false", "false, true"],
    answer: 1,
    explanation: "1 < 2 is true (1). 1 < 3 is true. 3 > 2 is true (1). 1 > 1 is false.",
    hint: "Left-to-right evaluation with boolean coercion."
  },
  {
    id: 101,
    difficulty: "medium",
    category: "rest_api",
    question: "Which HTTP method is considered 'Idempotent'?",
    options: ["POST", "GET", "PATCH", "CONNECT"],
    answer: 1,
    explanation: "GET, PUT, and DELETE are idempotent, meaning multiple identical requests should have the same effect as a single request. POST is not.",
    hint: "Safe to repeat without side effects."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "axios",
    question: "In Axios, how do you set a default Authorization header for all future requests?",
    options: [
      "axios.defaults.headers.common['Authorization'] = token;",
      "axios.setToken(token);",
      "axios.headers.auth = token;",
      "axios.config.global.auth = token;"
    ],
    answer: 0,
    explanation: "Modifying the axios.defaults object applies the configuration to all subsequent requests made by that axios instance.",
    hint: "Defaults and common headers."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "security",
    question: "What is the primary difference between 'LocalStorage' and 'Cookies' regarding API requests?",
    options: [
      "Cookies are automatically sent with every HTTP request to the domain; LocalStorage is not",
      "LocalStorage is more secure",
      "Cookies can store more data",
      "LocalStorage expires after 24 hours"
    ],
    answer: 0,
    explanation: "Cookies are part of the HTTP protocol and are sent in the headers. LocalStorage must be manually read and attached (e.g., as a Bearer token).",
    hint: "Automatic vs Manual transmission."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "rest_api",
    question: "What does the '401 Unauthorized' status code specifically imply?",
    options: [
      "The server is down",
      "The user has not provided valid authentication credentials",
      "The user is authenticated but does not have permission for the resource",
      "The resource was not found"
    ],
    answer: 1,
    explanation: "401 is for 'unauthenticated' (who are you?). 403 is for 'unauthorized/forbidden' (I know who you are, but you can't go here).",
    hint: "Identity vs Permission."
  },
  {
    id: 105,
    difficulty: "medium",
    category: "axios",
    question: "What is an Axios 'Interceptor'?",
    options: [
      "A way to block hackers",
      "Functions that Axios calls for every request or response to transform data or headers",
      "A type of CSS animation",
      "A method to cancel a request"
    ],
    answer: 1,
    explanation: "Interceptors are widely used to automatically attach tokens to requests or handle 401 errors in responses globally.",
    hint: "Middleware for requests."
  },
  {
    id: 106,
    difficulty: "hard",
    category: "security",
    question: "What is the 'HttpOnly' flag on a cookie used for?",
    options: [
      "To make the cookie faster",
      "To prevent client-side JavaScript from accessing the cookie (mitigating XSS)",
      "To ensure the cookie only works on HTTPS",
      "To compress the cookie data"
    ],
    answer: 1,
    explanation: "By setting HttpOnly, 'document.cookie' cannot read the cookie, protecting sensitive session IDs from malicious scripts.",
    hint: "Cross-Site Scripting protection."
  },
  {
    id: 107,
    difficulty: "medium",
    category: "rest_api",
    question: "Which header is used by a client to tell the server what media type it can handle?",
    options: ["Content-Type", "Accept", "User-Agent", "Authorization"],
    answer: 1,
    explanation: "The 'Accept' header tells the server: 'I want JSON' or 'I want XML'.",
    hint: "Client preference."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "axios",
    question: "How do you handle a request timeout in Axios?",
    options: [
      "Using the 'timeout' property in the config object",
      "Using setTimeout around the call",
      "Axios does not support timeouts",
      "By closing the browser"
    ],
    answer: 0,
    explanation: "You can set a 'timeout' in milliseconds. If the request takes longer, the promise is rejected.",
    hint: "Config property for time."
  },
  {
    id: 109,
    difficulty: "medium",
    category: "rest_api",
    question: "What is the standard format for a 'Bearer Token' in the Authorization header?",
    options: [
      "Token: <token>",
      "Authorization: Bearer <token>",
      "Bearer: <token>",
      "Auth-Token: <token>"
    ],
    answer: 1,
    explanation: "The 'Authorization' key is followed by the 'Bearer' scheme and then the actual JWT or token string.",
    hint: "Auth header + Scheme + Token."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'CORS' (Cross-Origin Resource Sharing)?",
    options: [
      "A security feature that allows/restricts resources on a web page to be requested from another domain",
      "A type of database",
      "A JavaScript framework",
      "A method for caching images"
    ],
    answer: 0,
    explanation: "CORS is a browser-enforced mechanism that uses headers to let a server indicate which origins are permitted to read its info.",
    hint: "Cross-domain security."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "axios",
    question: "Which property in the Axios response object contains the data returned by the server?",
    options: ["response.body", "response.payload", "response.data", "response.json"],
    answer: 2,
    explanation: "Unlike the native Fetch API (which requires .json()), Axios automatically parses JSON and puts it in the .data property.",
    hint: "Standard result property."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "security",
    question: "What does 'JWT' stand for?",
    options: [
      "Java Web Template",
      "JSON Web Token",
      "Joint Web Transfer",
      "JavaScript Work Tool"
    ],
    answer: 1,
    explanation: "JWT is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object.",
    hint: "Modern auth tokens."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "rest_api",
    question: "Which status code represents a 'Permanent Redirect'?",
    options: ["301", "302", "307", "308"],
    answer: 0,
    explanation: "301 is Moved Permanently; 302/307 are Temporary.",
    hint: "Permanent move."
  },
  {
    id: 114,
    difficulty: "hard",
    category: "axios",
    question: "How can you cancel an ongoing Axios request?",
    options: [
      "axios.stop()",
      "Using a 'CancelToken' or 'AbortController'",
      "By setting the request to null",
      "Requests cannot be canceled"
    ],
    answer: 1,
    explanation: "Modern Axios uses AbortController (the standard Web API) to cancel requests.",
    hint: "Aborting the mission."
  },
  {
    id: 115,
    difficulty: "medium",
    category: "security",
    question: "What is 'CSRF' (Cross-Site Request Forgery)?",
    options: [
      "Stealing a user's password",
      "Tricking a logged-in user's browser into sending a request to a vulnerable web application",
      "A type of server crash",
      "A database injection"
    ],
    answer: 1,
    explanation: "CSRF exploits the fact that browsers automatically include cookies (like session IDs) in requests to a domain.",
    hint: "Forged requests."
  },
  {
    id: 116,
    difficulty: "hard",
    category: "rest_api",
    question: "What is a 'Preflight' request in CORS?",
    options: [
      "A request sent to check the weather",
      "An OPTIONS request sent by the browser to check if the actual request is safe to send",
      "The first request after a login",
      "A way to warm up the cache"
    ],
    answer: 1,
    explanation: "For 'non-simple' requests (like those with custom headers or DELETE), the browser sends an OPTIONS request first.",
    hint: "The OPTIONS method."
  },
  {
    id: 117,
    difficulty: "medium",
    category: "axios",
    question: "How do you send a POST request with Axios passing a body object?",
    options: [
      "axios.post(url, { data: body })",
      "axios.post(url, body)",
      "axios.post(body, url)",
      "axios.send(url, body)"
    ],
    answer: 1,
    explanation: "In axios.post, the second argument is the data/body of the request.",
    hint: "URL then Data."
  },
  {
    id: 118,
    difficulty: "hard",
    category: "security",
    question: "Which cookie attribute prevents the cookie from being sent over unencrypted HTTP connections?",
    options: ["HttpOnly", "Secure", "SameSite", "Encrypted"],
    answer: 1,
    explanation: "The 'Secure' attribute ensures the cookie is only sent over HTTPS.",
    hint: "Encryption related."
  },
  {
    id: 119,
    difficulty: "medium",
    category: "rest_api",
    question: "What is the purpose of the 'Content-Type' header?",
    options: [
      "To identify the length of the body",
      "To tell the recipient the media type of the resource being sent",
      "To name the server",
      "To set the encoding"
    ],
    answer: 1,
    explanation: "Example: 'application/json' tells the server that the body is a JSON string.",
    hint: "Defining the payload format."
  },
  {
    id: 120,
    difficulty: "hard",
    category: "scenarios",
    question: "A client gets a '429 Too Many Requests' error. What is the most likely cause?",
    options: [
      "The server has too many files",
      "Rate limiting is active and the client exceeded its quota",
      "The URL is too long",
      "The user is not logged in"
    ],
    answer: 1,
    explanation: "429 is the standard response for rate limiting.",
    hint: "Exceeding limits."
  },
  {
    id: 121,
    difficulty: "medium",
    category: "axios",
    question: "How can you check if an error is a specific Axios error?",
    options: [
      "error instanceof Error",
      "axios.isAxiosError(error)",
      "error.type === 'axios'",
      "check(error)"
    ],
    answer: 1,
    explanation: "Axios provides a helper method to distinguish network/axios errors from general logic errors.",
    hint: "Built-in helper."
  },
  {
    id: 122,
    difficulty: "hard",
    category: "rest_api",
    question: "What does 'HATEOAS' stand for in REST architecture?",
    options: [
      "Hypermedia As The Engine Of Application State",
      "High Access To Encryption On All Systems",
      "Handling All Traffic Efficiently On All Servers",
      "Hypertext And Text Encoding Of All Services"
    ],
    answer: 0,
    explanation: "It means the API response should contain links to other related resources/actions.",
    hint: "Links in responses."
  },
  {
    id: 123,
    difficulty: "medium",
    category: "security",
    question: "What is 'SameSite' cookie attribute 'Lax'?",
    options: [
      "The cookie is never sent to other sites",
      "The cookie is sent only on top-level navigations (links) and not on sub-resource requests like images",
      "The cookie has no security",
      "The cookie is deleted after 1 hour"
    ],
    answer: 1,
    explanation: "'Lax' is the modern default, providing a balance between security and usability.",
    hint: "Balanced cross-site policy."
  },
  {
    id: 124,
    difficulty: "hard",
    category: "axios",
    question: "In Axios, how do you handle 'multipart/form-data' for file uploads in modern browsers?",
    options: [
      "Pass a 'FormData' object as the data parameter",
      "JSON.stringify the file",
      "Send the file as a string",
      "Axios cannot send files"
    ],
    answer: 0,
    explanation: "Axios automatically sets the correct Content-Type when it detects a FormData object.",
    hint: "Standard browser object for forms."
  },
  {
    id: 125,
    difficulty: "medium",
    category: "rest_api",
    question: "What is the difference between 'PUT' and 'PATCH'?",
    options: [
      "PUT replaces the entire resource; PATCH applies a partial update",
      "PATCH is only for CSS",
      "PUT is for creation; PATCH is for deletion",
      "There is no difference"
    ],
    answer: 0,
    explanation: "PUT is 'update/replace'; PATCH is 'modify'.",
    hint: "Whole vs Part."
  },
  {
    id: 126,
    difficulty: "hard",
    category: "security",
    question: "In a JWT, where is the user data (like roles) typically stored?",
    options: ["Header", "Payload", "Signature", "Footer"],
    answer: 1,
    explanation: "The Payload (middle part) contains the 'claims' or data. Note: it is only Base64 encoded, not encrypted.",
    hint: "The second part of the token."
  },
  {
    id: 127,
    difficulty: "medium",
    category: "rest_api",
    question: "What status code does a successful 'POST' that creates a resource usually return?",
    options: ["200 OK", "201 Created", "204 No Content", "404 Not Found"],
    answer: 1,
    explanation: "201 Created is the specific success code for resource creation.",
    hint: "Created status."
  },
  {
    id: 128,
    difficulty: "hard",
    category: "axios",
    question: "How do you create a reusable Axios instance with a specific 'baseURL'?",
    options: [
      "axios.setBase(url)",
      "const api = axios.create({ baseURL: url })",
      "axios.config.url = url",
      "new Axios(url)"
    ],
    answer: 1,
    explanation: "axios.create() is the pattern for creating custom configurations for specific APIs.",
    hint: "Factory method for instances."
  },
  {
    id: 129,
    difficulty: "medium",
    category: "rest_api",
    question: "Which header is used to facilitate 'Content Negotiation'?",
    options: ["Accept", "Accept-Language", "Accept-Encoding", "All of the above"],
    answer: 3,
    explanation: "Content negotiation allows the client to request specific formats, languages, or compression types.",
    hint: "The 'Accept' family."
  },
  {
    id: 130,
    difficulty: "hard",
    category: "troubleshooting",
    question: "What does a '504 Gateway Timeout' error indicate?",
    options: [
      "The client's internet is slow",
      "The server, acting as a proxy, did not get a timely response from an upstream server",
      "The database is deleted",
      "The page does not exist"
    ],
    answer: 1,
    explanation: "This often happens in microservice architectures when a load balancer/gateway waits too long for a service.",
    hint: "Upstream delay."
  },
  {
    id: 131,
    difficulty: "medium",
    category: "security",
    question: "Why should you never store sensitive tokens in 'LocalStorage' if possible?",
    options: [
      "It is too slow",
      "It is vulnerable to XSS; any script on the page can read it",
      "It is too small",
      "It only works on Google Chrome"
    ],
    answer: 1,
    explanation: "Unlike HttpOnly cookies, LocalStorage is accessible to all JavaScript on the domain.",
    hint: "XSS vulnerability."
  },
  {
    id: 132,
    difficulty: "hard",
    category: "rest_api",
    question: "What is a 'Stateless' API?",
    options: [
      "The API has no state in the database",
      "The server does not store any client context between requests; each request must contain all info needed",
      "The API only works in one state/country",
      "The API uses no variables"
    ],
    answer: 1,
    explanation: "REST is designed to be stateless to improve scalability and simplify server design.",
    hint: "No session memory on server."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "axios",
    question: "What is the result of a 'GET' request in Axios if the server returns a 404?",
    options: [
      "It returns null",
      "It throws/rejects an error (Promise catch)",
      "It returns the 404 page as a success string",
      "It retries automatically"
    ],
    answer: 1,
    explanation: "By default, Axios rejects any status code outside the 2xx range.",
    hint: "Rejection on non-2xx."
  },
  {
    id: 134,
    difficulty: "hard",
    category: "rest_api",
    question: "What is 'ETag' header used for?",
    options: [
      "Identifying the user",
      "Web caching and conditional requests to check if a resource has changed",
      "Encrypting the tag",
      "Sorting data"
    ],
    answer: 1,
    explanation: "The client sends the ETag back in 'If-None-Match'; if the resource hasn't changed, the server sends a 304 Not Modified.",
    hint: "Resource versioning for cache."
  },
  {
    id: 135,
    difficulty: "medium",
    category: "security",
    question: "What is a 'Refresh Token'?",
    options: [
      "A button to refresh the page",
      "A long-lived token used to obtain a new short-lived access token",
      "A token that changes the background color",
      "A way to reset the password"
    ],
    answer: 1,
    explanation: "Refresh tokens improve security by allowing access tokens to expire quickly while maintaining a good user experience.",
    hint: "Renewing access."
  },
  {
    id: 136,
    difficulty: "hard",
    category: "rest_api",
    question: "Which HTTP method is used to retrieve only the headers of a resource, without the body?",
    options: ["GET", "OPTIONS", "HEAD", "TRACE"],
    answer: 2,
    explanation: "HEAD is identical to GET but asks the server not to send the response body.",
    hint: "Just the top."
  },
  {
    id: 137,
    difficulty: "medium",
    category: "axios",
    question: "How do you pass query parameters (e.g., ?id=5) in an Axios GET request using the config object?",
    options: [
      "axios.get(url, { query: { id: 5 } })",
      "axios.get(url, { params: { id: 5 } })",
      "axios.get(url, { data: { id: 5 } })",
      "axios.get(url, { search: { id: 5 } })"
    ],
    answer: 1,
    explanation: "The 'params' key in the config object is used for URL query strings.",
    hint: "Key: params."
  },
  {
    id: 138,
    difficulty: "hard",
    category: "security",
    question: "What is the 'Signature' part of a JWT used for?",
    options: [
      "To store the user's name",
      "To verify that the sender is who they say they are and that the message wasn't changed",
      "To encrypt the payload",
      "To define the algorithm"
    ],
    answer: 1,
    explanation: "The signature is created by hashing the header and payload with a secret key.",
    hint: "Integrity check."
  },
  {
    id: 139,
    difficulty: "medium",
    category: "rest_api",
    question: "What does the '204 No Content' status code mean?",
    options: [
      "The server failed",
      "The request was successful, but the server is not returning any content (common for DELETE)",
      "The database is empty",
      "The user has no permissions"
    ],
    answer: 1,
    explanation: "Success, but nothing to show in the body.",
    hint: "Empty success."
  },
  {
    id: 140,
    difficulty: "hard",
    category: "troubleshooting",
    question: "You see 'ERR_CONNECTION_REFUSED' in the console. What is the most likely issue?",
    options: [
      "The server is actively rejecting the connection (e.g., service not running or port blocked)",
      "The internet is disconnected",
      "The user's password is wrong",
      "The JSON is invalid"
    ],
    answer: 0,
    explanation: "This is a network-level error indicating nothing is listening on the target port.",
    hint: "Port/Service down."
  },
  {
    id: 141,
    difficulty: "medium",
    category: "rest_api",
    question: "What is 'REST'? (Representational State Transfer)",
    options: [
      "A programming language",
      "An architectural style for designing networked applications using HTTP",
      "A database type",
      "A library for Node.js"
    ],
    answer: 1,
    explanation: "REST is a set of constraints, not a specific tool.",
    hint: "Architectural style."
  },
  {
    id: 142,
    difficulty: "hard",
    category: "axios",
    question: "How do you perform multiple concurrent requests with Axios and wait for all to finish?",
    options: [
      "axios.all([req1, req2]) and axios.spread()",
      "Using Promise.all()",
      "Both are correct",
      "You must call them one by one"
    ],
    answer: 2,
    explanation: "axios.all is a legacy wrapper around Promise.all. Both work similarly.",
    hint: "Promise aggregation."
  },
  {
    id: 143,
    difficulty: "medium",
    category: "security",
    question: "What is the 'Bearer' in 'Authorization: Bearer <token>'?",
    options: [
      "The name of the user",
      "The authentication scheme name",
      "A type of encryption",
      "The server name"
    ],
    answer: 1,
    explanation: "It indicates that the bearer of the token is authorized.",
    hint: "The scheme."
  },
  {
    id: 144,
    difficulty: "hard",
    category: "rest_api",
    question: "What is the difference between '403 Forbidden' and '404 Not Found' for a resource that exists but the user shouldn't know about?",
    options: [
      "There is no difference",
      "Servers sometimes use 404 to hide the existence of a resource from unauthorized users (obfuscation)",
      "403 is always better",
      "404 is only for missing files"
    ],
    answer: 1,
    explanation: "Returning a 403 confirms the resource exists, which might be a security risk. 404 prevents this disclosure.",
    hint: "Security through obscurity."
  },
  {
    id: 145,
    difficulty: "medium",
    category: "axios",
    question: "What is the 'validateStatus' config in Axios used for?",
    options: [
      "To check if the user is valid",
      "To define which HTTP status codes should resolve or reject the promise",
      "To check the syntax of the response",
      "To validate the token"
    ],
    answer: 1,
    explanation: "By default, it is 'status >= 200 && status < 300'.",
    hint: "Customizing success range."
  },
  {
    id: 146,
    difficulty: "hard",
    category: "rest_api",
    question: "In GraphQL vs REST, what is 'Over-fetching'?",
    options: [
      "Getting too much data than required from a REST endpoint",
      "Asking for the same data twice",
      "A slow network",
      "Downloading a huge file"
    ],
    answer: 0,
    explanation: "REST endpoints often return fixed data structures. GraphQL allows requesting only the specific fields needed.",
    hint: "Excess data."
  },
  {
    id: 147,
    difficulty: "medium",
    category: "security",
    question: "What is 'XSS' (Cross-Site Scripting)?",
    options: [
      "Injecting malicious scripts into a trusted website",
      "Deleting the database",
      "Using CSS to hide buttons",
      "A network error"
    ],
    answer: 0,
    explanation: "XSS occurs when an application includes untrusted data in a web page without proper validation/escaping.",
    hint: "Script injection."
  },
  {
    id: 148,
    difficulty: "hard",
    category: "troubleshooting",
    question: "You receive a '415 Unsupported Media Type'. What is wrong?",
    options: [
      "The image is too large",
      "The server does not support the format of the data sent in the request (Check Content-Type header)",
      "The server is offline",
      "The token is expired"
    ],
    answer: 1,
    explanation: "This happens if you send XML to an endpoint that only accepts JSON.",
    hint: "Format mismatch."
  },
  {
    id: 149,
    difficulty: "medium",
    category: "rest_api",
    question: "What is the purpose of the 'Location' header in a 201 Created response?",
    options: [
      "To tell you where the server is located geographically",
      "To provide the URL to the newly created resource",
      "To redirect to the login page",
      "To show the user's IP address"
    ],
    answer: 1,
    explanation: "It allows the client to immediately know where to fetch the new item.",
    hint: "Path to new resource."
  },
  {
    id: 150,
    difficulty: "hard",
    category: "axios",
    question: "What happens if you don't 'catch' an error in an Axios call in an async function?",
    options: [
      "It retries automatically",
      "The program might crash or result in an 'Unhandled Promise Rejection'",
      "Nothing, it fails silently",
      "It returns a default value"
    ],
    answer: 1,
    explanation: "Always use try/catch or .catch() to handle network failures or non-2xx responses.",
    hint: "Error handling necessity."
  },
  {
    id: 151,
    difficulty: "medium",
    category: "async",
    question: "What are the three states of a JavaScript Promise?",
    options: ["Starting, Running, Finished", "Pending, Fulfilled, Rejected", "Wait, Resolve, Error", "Idle, Active, Done"],
    answer: 1,
    explanation: "A promise starts in 'pending', then transitions to either 'fulfilled' (success) or 'rejected' (failure).",
    hint: "The lifecycle of an eventual value."
  },
  {
    id: 152,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Debouncing' in the context of performance optimization?",
    options: [
      "A way to delete unused code",
      "Ensuring that a function is not called again until a certain amount of time has passed since its last call",
      "Making sure a function runs every 10ms no matter what",
      "Compiling code into binary"
    ],
    answer: 1,
    explanation: "Debouncing is used to limit the rate at which a function (like a search input handler) executes.",
    hint: "Wait for the user to stop typing."
  },
  {
    id: 153,
    difficulty: "medium",
    category: "event_loop",
    question: "In the JavaScript Event Loop, what is the difference between Microtasks and Macrotasks?",
    options: [
      "Microtasks are for CSS; Macrotasks are for JS",
      "Microtasks (like Promise.then) have higher priority and run before the next Macrotask (like setTimeout)",
      "Macrotasks are faster than Microtasks",
      "There is no difference"
    ],
    answer: 1,
    explanation: "After every macrotask, the engine processes the entire microtask queue before moving to the next macrotask.",
    hint: "Priority of Promises vs Timers."
  },
  {
    id: 154,
    difficulty: "hard",
    category: "async",
    question: "What does 'Promise.race()' do?",
    options: [
      "Runs all promises and returns all results",
      "Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects",
      "Makes promises run slower",
      "Only returns the first successful promise and ignores errors"
    ],
    answer: 1,
    explanation: "The first promise to settle (either win or fail) wins the race.",
    hint: "The first one to finish."
  },
  {
    id: 155,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Throttling'?",
    options: [
      "Blocking a user",
      "Guaranteeing that a function is executed at most once in a specified time interval",
      "Speeding up the CPU",
      "A type of memory leak"
    ],
    answer: 1,
    explanation: "Unlike debouncing, throttling ensures a function executes regularly (e.g., during a scroll event).",
    hint: "Regular execution intervals."
  },
  {
    id: 156,
    difficulty: "hard",
    category: "scalability",
    question: "What is 'Vertical Scaling'?",
    options: [
      "Adding more servers",
      "Increasing the capacity (CPU/RAM) of a single existing server",
      "Writing more lines of code",
      "Using a Load Balancer"
    ],
    answer: 1,
    explanation: "Vertical scaling (scaling up) has physical limits, unlike horizontal scaling (scaling out).",
    hint: "Making one machine stronger."
  },
  {
    id: 157,
    difficulty: "medium",
    category: "async",
    question: "How do you handle multiple independent promises where you want to wait for all to settle, regardless of whether they fail or succeed?",
    options: ["Promise.all()", "Promise.any()", "Promise.allSettled()", "Promise.race()"],
    answer: 2,
    explanation: "Promise.allSettled() returns an array of objects describing the outcome of each promise.",
    hint: "Waiting for everyone to finish, win or lose."
  },
  {
    id: 158,
    difficulty: "hard",
    category: "performance",
    question: "What are 'Web Workers' used for?",
    options: [
      "To style the website",
      "To run heavy scripts in background threads, preventing the main UI thread from freezing",
      "To manage cookies",
      "To create animations"
    ],
    answer: 1,
    explanation: "Web Workers allow multi-threading in JavaScript by running code in a separate thread from the window.",
    hint: "Background processing."
  },
  {
    id: 159,
    difficulty: "medium",
    category: "async",
    question: "What is the 'Callback Hell'?",
    options: [
      "A bug in the browser",
      "A situation where multiple nested callbacks make code hard to read and maintain",
      "A recursive function that never ends",
      "A security vulnerability"
    ],
    answer: 1,
    explanation: "Flattening nested callbacks was one of the primary motivations for introducing Promises and Async/Await.",
    hint: "Pyramid of doom."
  },
  {
    id: 160,
    difficulty: "hard",
    category: "event_loop",
    question: "What happens if you run an infinite 'while' loop in the main thread of a browser?",
    options: [
      "The browser will use a different thread",
      "The UI will freeze and the user cannot interact with the page",
      "It will run in the background",
      "JavaScript will crash with a SyntaxError"
    ],
    answer: 1,
    explanation: "JavaScript is single-threaded; an infinite loop blocks the event loop and prevents rendering.",
    hint: "Blocking the main thread."
  },
  {
    id: 161,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Lazy Loading'?",
    options: [
      "Waiting for the user to click",
      "Delaying the initialization/loading of a resource until it is actually needed (e.g., images below the fold)",
      "Writing inefficient code",
      "A server-side error"
    ],
    answer: 1,
    explanation: "Lazy loading reduces initial page load time and saves bandwidth.",
    hint: "Load on demand."
  },
  {
    id: 162,
    difficulty: "hard",
    category: "scalability",
    question: "What is 'Horizontal Scaling'?",
    options: [
      "Buying a faster computer",
      "Connecting multiple hardware or software entities (like servers) so that they work as a single logical unit",
      "Rotating the monitor",
      "Optimizing SQL queries"
    ],
    answer: 1,
    explanation: "Scaling out by adding more instances is the key to modern cloud scalability.",
    hint: "Strength in numbers (servers)."
  },
  {
    id: 163,
    difficulty: "medium",
    category: "async",
    question: "What does the 'await' keyword do?",
    options: [
      "It makes the code run faster",
      "It pauses the execution of an async function until a Promise is settled",
      "It skips the next line of code",
      "It creates a new thread"
    ],
    answer: 1,
    explanation: "'await' can only be used inside 'async' functions (or top-level modules in some environments).",
    hint: "Wait for the promise."
  },
  {
    id: 164,
    difficulty: "hard",
    category: "performance",
    question: "Which tool is built into Chrome to help analyze performance and identify bottlenecks?",
    options: ["Network Tab", "Lighthouse / Performance Tab", "Console", "Elements Tab"],
    answer: 1,
    explanation: "The Performance tab allows you to record and inspect the execution of your code and rendering.",
    hint: "Profiling tool."
  },
  {
    id: 165,
    difficulty: "medium",
    category: "async",
    question: "What is 'Promise.any()'?",
    options: [
      "Returns as soon as all promises fulfill",
      "Returns as soon as any of the promises fulfill (ignores rejections unless all fail)",
      "Returns the first promise that settles",
      "Throws an error if any promise fails"
    ],
    answer: 1,
    explanation: "Introduced in ES2021, it is the opposite of Promise.all() in a way.",
    hint: "First success wins."
  },
  {
    id: 166,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Tree Shaking'?",
    options: [
      "Cleaning a computer",
      "The process of removing unused code from the final bundle in modern build tools (like Webpack or Rollup)",
      "A type of binary search",
      "Organizing files into folders"
    ],
    answer: 1,
    explanation: "It relies on the static structure of ES Modules (import/export) to detect dead code.",
    hint: "Removing dead leaves (code)."
  },
  {
    id: 167,
    difficulty: "medium",
    category: "scalability",
    question: "What is a 'Load Balancer'?",
    options: [
      "A tool to measure the weight of a server",
      "A device/software that distributes network or application traffic across a cluster of servers",
      "A way to speed up the database",
      "An ISP feature"
    ],
    answer: 1,
    explanation: "Load balancers prevent any single server from becoming a bottleneck or single point of failure.",
    hint: "Traffic distribution."
  },
  {
    id: 168,
    difficulty: "hard",
    category: "async",
    question: "If an async function returns a value that is NOT a Promise, what happens?",
    options: [
      "It throws an error",
      "The value is automatically wrapped in a resolved Promise",
      "It returns undefined",
      "The function becomes synchronous"
    ],
    answer: 1,
    explanation: "Async functions always return a Promise.",
    hint: "Implicit promise wrapping."
  },
  {
    id: 169,
    difficulty: "medium",
    category: "performance",
    question: "Why is 'Concatenating' many small strings in a loop considered a performance risk in some engines?",
    options: [
      "Strings are immutable; each concatenation creates a new string and copies the old data",
      "It causes a syntax error",
      "It uses too many variables",
      "Strings are limited to 100 characters"
    ],
    answer: 0,
    explanation: "Modern engines optimize this, but for massive operations, using an array and .join('') is often safer.",
    hint: "Immutability overhead."
  },
  {
    id: 170,
    difficulty: "hard",
    category: "event_loop",
    question: "What is 'requestAnimationFrame' used for?",
    options: [
      "To load data from an API",
      "To perform animations smoothly by syncing with the browser's refresh rate",
      "To set a timeout",
      "To handle button clicks"
    ],
    answer: 1,
    explanation: "It is more efficient than setTimeout for animations because it doesn't run when the tab is inactive.",
    hint: "60 FPS optimization."
  },
  {
    id: 171,
    difficulty: "medium",
    category: "scalability",
    question: "What is 'Database Sharding'?",
    options: [
      "Backing up a database",
      "Breaking up a large database into smaller, faster, more easily managed parts called data shards",
      "Deleting old records",
      "Changing the database password"
    ],
    answer: 1,
    explanation: "Sharding is a method of horizontal scaling for databases.",
    hint: "Horizontal database partitioning."
  },
  {
    id: 172,
    difficulty: "hard",
    category: "performance",
    question: "What does the 'Priority' of a script 'defer' attribute mean?",
    options: [
      "The script is ignored",
      "The script is executed only after the HTML document has been fully parsed",
      "The script is executed immediately",
      "The script has the highest priority"
    ],
    answer: 1,
    explanation: "'defer' maintains the order of scripts and waits for the DOM to be ready.",
    hint: "Non-blocking parsing."
  },
  {
    id: 173,
    difficulty: "medium",
    category: "async",
    question: "What is the difference between 'async/await' and 'Promises'?",
    options: [
      "They are two completely different systems",
      "Async/await is 'syntactic sugar' built on top of Promises for cleaner code",
      "Promises are faster",
      "Async/await is only for Node.js"
    ],
    answer: 1,
    explanation: "Async/await makes asynchronous code look and behave a bit more like synchronous code.",
    hint: "Sugar on the promise."
  },
  {
    id: 174,
    difficulty: "hard",
    category: "scalability",
    question: "What is 'Microservices Architecture'?",
    options: [
      "Using very small servers",
      "An architectural style that structures an application as a collection of small, autonomous services",
      "A way to write short functions",
      "A database technique"
    ],
    answer: 1,
    explanation: "Microservices allow teams to scale and deploy parts of an application independently.",
    hint: "Decomposed monolith."
  },
  {
    id: 175,
    difficulty: "medium",
    category: "performance",
    question: "What is the 'Critical Rendering Path'?",
    options: [
      "The shortest path to the server",
      "The sequence of steps the browser goes through to convert HTML, CSS, and JS into pixels on the screen",
      "The path to the main function",
      "A security protocol"
    ],
    answer: 1,
    explanation: "Optimizing the CRP (e.g., minifying CSS) improves the 'Time to First Paint'.",
    hint: "HTML to Pixels."
  },
  {
    id: 176,
    difficulty: "hard",
    category: "async",
    question: "What is a 'Thenable'?",
    options: [
      "An object that has a .then() method",
      "A type of variable",
      "A function that returns true",
      "A specific type of Error"
    ],
    answer: 0,
    explanation: "All Promises are thenables, but not all thenables are Promises (e.g., custom objects).",
    hint: "Has a .then method."
  },
  {
    id: 177,
    difficulty: "medium",
    category: "event_loop",
    question: "Where do 'setTimeout' callbacks get placed?",
    options: ["Microtask Queue", "Task Queue (Macrotask Queue)", "Call Stack", "Heap"],
    answer: 1,
    explanation: "Timers are macrotasks.",
    hint: "Macrotask family."
  },
  {
    id: 178,
    difficulty: "hard",
    category: "performance",
    question: "How does 'Memoization' improve performance?",
    options: [
      "By using less RAM",
      "By caching the results of expensive function calls and returning the cached result when the same inputs occur again",
      "By compressing the code",
      "By deleting old variables"
    ],
    answer: 1,
    explanation: "Memoization is a specific form of caching used in functional programming.",
    hint: "Remembering results."
  },
  {
    id: 179,
    difficulty: "medium",
    category: "scalability",
    question: "What is 'Statelessness' in the context of scaling web servers?",
    options: [
      "The server doesn't use variables",
      "Any server instance can handle any request because no client session data is stored on the local server disk/memory",
      "The server has no country",
      "The server is turned off"
    ],
    answer: 1,
    explanation: "Statelessness allows you to add or remove servers behind a load balancer without breaking user sessions.",
    hint: "Session-independent requests."
  },
  {
    id: 180,
    difficulty: "hard",
    category: "async",
    question: "What is 'Error Bubbling' in Promises?",
    options: [
      "Errors making bubbles on screen",
      "An unhandled rejection in a promise chain will 'bubble up' to the nearest .catch() handler",
      "Errors that repeat",
      "A way to fix bugs"
    ],
    answer: 1,
    explanation: "This allows you to have one .catch() at the end of a long chain of .then() calls.",
    hint: "Catch at the end."
  },
  {
    id: 181,
    difficulty: "medium",
    category: "performance",
    question: "What is the benefit of using a 'Content Delivery Network' (CDN)?",
    options: [
      "It makes the code more secure",
      "It serves static assets from servers closer to the user's physical location, reducing latency",
      "It replaces the database",
      "It is free"
    ],
    answer: 1,
    explanation: "CDNs use 'edge servers' to minimize the distance data travels.",
    hint: "Geographic proximity."
  },
  {
    id: 182,
    difficulty: "hard",
    category: "event_loop",
    question: "What is the result of: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);",
    options: ["1, 2, 3, 4", "1, 4, 3, 2", "1, 4, 2, 3", "3, 1, 4, 2"],
    answer: 1,
    explanation: "1 and 4 are synchronous. 3 is a microtask (runs after sync). 2 is a macrotask (runs last).",
    hint: "Sync -> Micro -> Macro."
  },
  {
    id: 183,
    difficulty: "medium",
    category: "scalability",
    question: "What is 'Caching'?",
    options: [
      "Deleting files",
      "Storing copies of data in a high-speed storage layer for faster future access",
      "Earning money from code",
      "A type of variable"
    ],
    answer: 1,
    explanation: "Caching can happen at the browser, CDN, server, or database level.",
    hint: "Fast-access storage."
  },
  {
    id: 184,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Reflow' in browser rendering?",
    options: [
      "A new way to write CSS",
      "The process by which the browser calculates the positions and geometries of elements in the document",
      "Refreshing the page",
      "Loading a script"
    ],
    answer: 1,
    explanation: "Excessive Reflow (layout) is a major cause of performance lag, especially in loops.",
    hint: "Layout calculation."
  },
  {
    id: 185,
    difficulty: "medium",
    category: "async",
    question: "How do you run two promises in parallel but continue only when BOTH are finished?",
    options: ["await p1; await p2;", "Promise.all([p1, p2])", "Promise.race([p1, p2])", "p1.then(p2)"],
    answer: 1,
    explanation: "Promise.all() is the standard way to handle concurrent asynchronous operations.",
    hint: "Wait for all."
  },
  {
    id: 186,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Service Worker'?",
    options: [
      "A person who fixes servers",
      "A script that the browser runs in the background, separate from a web page, enabling features like offline support and push notifications",
      "A tool for writing HTML",
      "A type of database"
    ],
    answer: 1,
    explanation: "Service workers are a key part of Progressive Web Apps (PWAs).",
    hint: "Proxy between browser and network."
  },
  {
    id: 187,
    difficulty: "medium",
    category: "scalability",
    question: "What is 'Read Replicas' in databases?",
    options: [
      "Copies of a database that handle only read queries to reduce the load on the primary (write) database",
      "A way to read code",
      "A type of backup",
      "A tool for text-to-speech"
    ],
    answer: 0,
    explanation: "Read replicas are used to scale applications with high read-to-write ratios.",
    hint: "Scaling read operations."
  },
  {
    id: 188,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Repaint' vs 'Reflow'?",
    options: [
      "They are the same",
      "Reflow changes the layout; Repaint only changes the visual appearance (like color) without affecting layout",
      "Repaint is slower",
      "Reflow is only for mobile"
    ],
    answer: 1,
    explanation: "Repaint is 'cheaper' than Reflow because it doesn't require recalculating element dimensions.",
    hint: "Visual vs Structural change."
  },
  {
    id: 189,
    difficulty: "medium",
    category: "async",
    question: "What is an 'Async Iterator'?",
    options: [
      "A loop that never ends",
      "An object that allows you to iterate over data that comes asynchronously (using 'for await...of')",
      "A type of array",
      "A tool for sorting"
    ],
    answer: 1,
    explanation: "Commonly used for reading streams or paginated API data.",
    hint: "Looping over promises."
  },
  {
    id: 190,
    difficulty: "hard",
    category: "performance",
    question: "Which of the following causes the most significant performance hit in a web app?",
    options: ["Frequent DOM manipulation", "Using 'let' instead of 'const'", "Small strings", "Using many comments"],
    answer: 0,
    explanation: "DOM access and manipulation are very slow compared to general JavaScript logic.",
    hint: "The bridge between JS and UI."
  },
  {
    id: 191,
    difficulty: "medium",
    category: "scalability",
    question: "What is a 'Session Store'?",
    options: [
      "A store that sells computers",
      "An external database (like Redis) used to store user session data across multiple servers",
      "The browser's LocalStorage",
      "A way to save files"
    ],
    answer: 1,
    explanation: "External session stores are necessary for scaling out stateful applications horizontally.",
    hint: "Shared memory for servers."
  },
  {
    id: 192,
    difficulty: "hard",
    category: "event_loop",
    question: "Does 'await' block the entire browser thread?",
    options: [
      "Yes, the page freezes",
      "No, it only 'pauses' the async function while letting the event loop process other tasks",
      "Only in Safari",
      "Only if the promise is large"
    ],
    answer: 1,
    explanation: "The magic of async/await is that it is non-blocking to the main thread.",
    hint: "Non-blocking pause."
  },
  {
    id: 193,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Minification'?",
    options: [
      "Making the website smaller on screen",
      "Removing whitespace, comments, and shortening variable names to reduce file size",
      "Deleting functions",
      "A type of compression"
    ],
    answer: 1,
    explanation: "Tools like Terser perform minification to speed up network transfers.",
    hint: "Reducing code footprint."
  },
  {
    id: 194,
    difficulty: "hard",
    category: "scalability",
    question: "What is 'Rate Limiting'?",
    options: [
      "Limiting the speed of the car",
      "Restricting the number of requests a user/client can make to a server within a timeframe",
      "Charging users for API calls",
      "A security firewall"
    ],
    answer: 1,
    explanation: "Rate limiting prevents DDoS attacks and ensures fair usage of resources.",
    hint: "Quota management."
  },
  {
    id: 195,
    difficulty: "medium",
    category: "async",
    question: "What happens if a Promise rejects and there is no .catch()?",
    options: [
      "The browser ignores it",
      "An 'UnhandledPromiseRejection' error occurs",
      "It retries",
      "The computer restarts"
    ],
    answer: 1,
    explanation: "Modern browsers and Node.js will log this as a serious error and may eventually crash the process.",
    hint: "Missing error handler."
  },
  {
    id: 196,
    difficulty: "hard",
    category: "performance",
    question: "What is 'HTTP/2 Multiplexing'?",
    options: [
      "A way to watch movies",
      "The ability to send multiple requests and responses over a single TCP connection simultaneously",
      "Sending data to multiple servers",
      "Encrypting HTTP"
    ],
    answer: 1,
    explanation: "This eliminates the need for 'domain sharding' and reduces latency for loading many small assets.",
    hint: "Multiple streams, one connection."
  },
  {
    id: 197,
    difficulty: "medium",
    category: "scalability",
    question: "What is 'Auto-scaling'?",
    options: [
      "Changing the size of the font automatically",
      "A cloud feature that automatically adjusts the number of server instances based on traffic",
      "A self-writing code",
      "A database tool"
    ],
    answer: 1,
    explanation: "Auto-scaling helps handle traffic spikes efficiently and saves costs during low-traffic periods.",
    hint: "Dynamic capacity."
  },
  {
    id: 198,
    difficulty: "hard",
    category: "event_loop",
    question: "Where is 'process.nextTick' (Node.js) executed in the event loop?",
    options: [
      "At the very end of the loop",
      "Immediately after the current operation, before the next microtask/macrotask",
      "In the timer phase",
      "In the background thread"
    ],
    answer: 1,
    explanation: "process.nextTick is even higher priority than Promise microtasks in Node.js.",
    hint: "Immediate execution in Node."
  },
  {
    id: 199,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Compression' (like Gzip/Brotli) in web development?",
    options: [
      "Making the text smaller",
      "Reducing the size of data sent over the network from the server to the client",
      "Deleting images",
      "A way to speed up the mouse"
    ],
    answer: 1,
    explanation: "Brotli is a modern compression algorithm that often provides better ratios than Gzip.",
    hint: "Network payload reduction."
  },
  {
    id: 200,
    difficulty: "hard",
    category: "scalability",
    question: "What is the 'Thundering Herd' problem in caching?",
    options: [
      "Too many users",
      "When a cache entry expires and many requests simultaneously try to regenerate it, overwhelming the database",
      "A virus",
      "Slow internet"
    ],
    answer: 1,
    explanation: "This is often solved using 'locking' or 'probabilistic early expiration'.",
    hint: "Cache miss stampede."
  },
  {
    id: 201,
    difficulty: "medium",
    category: "cdn",
    question: "What is a 'Cache Hit' in the context of a CDN?",
    options: [
      "When the CDN fails to find the file",
      "When the requested content is found and served directly from the CDN's edge server",
      "When the user hits the refresh button",
      "When the server crashes"
    ],
    answer: 1,
    explanation: "A cache hit means lower latency because the request doesn't need to travel back to the origin server.",
    hint: "Found at the edge."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "backward_compatibility",
    question: "What is a 'Polyfill'?",
    options: [
      "A type of CSS variable",
      "A piece of code used to provide modern functionality on older browsers that do not natively support it",
      "A security patch",
      "A way to compress JavaScript files"
    ],
    answer: 1,
    explanation: "Polyfills 'fill in' the gaps in an older browser's API (e.g., adding Promise support to IE11).",
    hint: "Filling the gaps."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "troubleshooting",
    question: "You see a 'MIME type mismatch' error in the console when loading a script. What is the most likely cause?",
    options: [
      "The script has a syntax error",
      "The server sent 'text/html' instead of 'application/javascript' in the Content-Type header",
      "The user is using an old browser",
      "The script is too large"
    ],
    answer: 1,
    explanation: "Browsers enforce strict MIME type checking for security (X-Content-Type-Options: nosniff).",
    hint: "Check server headers."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "versioning",
    question: "What is 'Transpilation' (e.g., using Babel)?",
    options: [
      "Compiling JS to Machine Code",
      "Converting source code from one version of JavaScript (ES6+) to another (ES5)",
      "Translating JS to Python",
      "Minifying the code"
    ],
    answer: 1,
    explanation: "Transpilation allows developers to use the latest syntax while maintaining backward compatibility.",
    hint: "Source-to-source compilation."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "cdn",
    question: "How do you force a CDN to update a file that has been modified but is still cached?",
    options: [
      "Wait 24 hours",
      "Purge or Invalidate the cache for that specific URL",
      "Rename the file",
      "Both 'Purge' and 'Rename' (Cache Busting) are valid strategies"
    ],
    answer: 3,
    explanation: "Purging is done via the CDN dashboard; Cache Busting involves changing the filename (e.g., style.v2.css).",
    hint: "Clearing the old version."
  },
  {
    id: 206,
    difficulty: "hard",
    category: "backward_compatibility",
    question: "Which tool is commonly used to check the browser support for a specific JavaScript feature?",
    options: ["Google Search", "Can I Use (caniuse.com)", "MDN only", "Stack Overflow"],
    answer: 1,
    explanation: "Can I Use provides up-to-date browser support tables for modern web technologies.",
    hint: "Browser compatibility database."
  },
  {
    id: 207,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does the 'Sourcemap' file (.map) do?",
    options: [
      "It maps the location of the server",
      "It maps minified/transpiled code back to the original source code for easier debugging",
      "It is a backup of the database",
      "It speeds up the website"
    ],
    answer: 1,
    explanation: "Without sourcemaps, debugging production errors is nearly impossible as the code is unreadable.",
    hint: "Connecting minified code to source."
  },
  {
    id: 208,
    difficulty: "hard",
    category: "cdn",
    question: "What is 'Origin Shielding' in CDN architecture?",
    options: [
      "A firewall for the origin",
      "An extra caching layer between the CDN edge servers and the origin server to further reduce origin load",
      "Hiding the IP of the server",
      "Encrypting the origin data"
    ],
    answer: 1,
    explanation: "It prevents many edge servers from hitting the origin simultaneously for the same content.",
    hint: "A middle-man cache."
  },
  {
    id: 209,
    difficulty: "medium",
    category: "versioning",
    question: "What is 'Feature Detection'?",
    options: [
      "Using a library to detect bugs",
      "Checking if a specific API or method exists in the current browser before using it (e.g., if (window.Promise) ...)",
      "Detecting the user's OS",
      "Checking the version of Node.js"
    ],
    answer: 1,
    explanation: "Feature detection is preferred over 'User Agent sniffing' because it is more reliable.",
    hint: "Check for the capability, not the browser."
  },
  {
    id: 210,
    difficulty: "hard",
    category: "scenarios",
    question: "A user reports the site is 'broken' only on their very old tablet. You suspect a syntax error from an ES6 arrow function. How do you confirm this?",
    options: [
      "Ask the user for their password",
      "Check the console for a 'SyntaxError: Unexpected token =>'",
      "Restart the server",
      "Assume it is a network error"
    ],
    answer: 1,
    explanation: "Older engines that don't support ES6 will fail to parse arrow functions entirely.",
    hint: "Syntax incompatibility."
  },
  {
    id: 211,
    difficulty: "medium",
    category: "performance",
    question: "What is 'DNS Prefetching'?",
    options: [
      "Downloading the website early",
      "Resolving the domain names of assets on a page before they are requested to reduce latency",
      "Setting up a new DNS server",
      "A type of browser history"
    ],
    answer: 1,
    explanation: "By adding <link rel='dns-prefetch' href='...'>, you can save valuable milliseconds.",
    hint: "Early resolution."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "troubleshooting",
    question: "What is a 'Circular Dependency' in JavaScript modules?",
    options: [
      "When a function calls itself",
      "When Module A imports Module B, and Module B also imports Module A",
      "A loop that never ends",
      "A type of array"
    ],
    answer: 1,
    explanation: "This can lead to 'undefined' values during module initialization if not handled carefully by the bundler.",
    hint: "A imports B imports A."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "backward_compatibility",
    question: "What is the purpose of the 'nomodule' attribute on a script tag?",
    options: [
      "To prevent the script from running",
      "To ensure a script only runs in older browsers that do NOT support ES modules",
      "To hide the script from hackers",
      "To load the script faster"
    ],
    answer: 1,
    explanation: "This allows you to serve a modern bundle to modern browsers and a legacy polyfilled bundle to old ones.",
    hint: "Legacy-only script."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "cdn",
    question: "What does 'TTL' (Time To Live) represent in a CDN record?",
    options: [
      "The total time the server has been running",
      "The duration for which a resource is considered fresh in the cache before it must be re-validated",
      "The speed of light",
      "The user's session time"
    ],
    answer: 1,
    explanation: "After the TTL expires, the CDN will check the origin server for an updated version.",
    hint: "Cache expiration timer."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "versioning",
    question: "In Semantic Versioning (SemVer), what does the middle number in 2.4.1 represent?",
    options: ["Major version", "Minor version (new features, backward compatible)", "Patch version", "Build number"],
    answer: 1,
    explanation: "Format is Major.Minor.Patch.",
    hint: "Feature additions."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "scenarios",
    question: "Your app works locally but fails in production with 'Cross-Origin Request Blocked'. The production API is on a different subdomain. What is missing?",
    options: [
      "The production server is off",
      "The API server needs to include the correct 'Access-Control-Allow-Origin' header",
      "The user's internet is blocked",
      "The browser is too new"
    ],
    answer: 1,
    explanation: "This is a classic CORS issue where the browser blocks the request for security.",
    hint: "CORS headers."
  },
  {
    id: 217,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What is 'Console.table()' used for?",
    options: [
      "To create a real table in HTML",
      "To display data (like arrays or objects) in a tabular format in the developer console",
      "To store data",
      "To clear the console"
    ],
    answer: 1,
    explanation: "It makes it much easier to visualize collections of objects.",
    hint: "Pretty-print for arrays of objects."
  },
  {
    id: 218,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Tree Shaking' specifically dependent on?",
    options: [
      "CommonJS 'require' syntax",
      "ESM 'import/export' static structure",
      "The size of the files",
      "The number of comments"
    ],
    answer: 1,
    explanation: "Because 'import' is static, the bundler can determine exactly which code is unused.",
    hint: "Static module analysis."
  },
  {
    id: 219,
    difficulty: "medium",
    category: "cdn",
    question: "What is 'Edge Computing' in the context of CDNs?",
    options: [
      "Computing only on the screen's edge",
      "Running code (like logic or image resizing) on the CDN servers themselves, closer to the user",
      "A very fast CPU",
      "A way to write CSS"
    ],
    answer: 1,
    explanation: "Examples include AWS CloudFront Functions or Cloudflare Workers.",
    hint: "Logic at the edge."
  },
  {
    id: 220,
    difficulty: "hard",
    category: "backward_compatibility",
    question: "How does 'Babel-preset-env' work?",
    options: [
      "It makes the code environmentally friendly",
      "It automatically determines which polyfills and transforms are needed based on your target browser list",
      "It deletes old code",
      "It only works on Windows"
    ],
    answer: 1,
    explanation: "You define the 'targets' (e.g., > 0.5%, last 2 versions), and Babel handles the rest.",
    hint: "Target-based transpilation."
  },
  {
    id: 221,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does 'FOUC' stand for?",
    options: [
      "File Of Unknown Character",
      "Flash Of Unstyled Content",
      "Function Only Under Condition",
      "Fast Object User Control"
    ],
    answer: 1,
    explanation: "This happens when the browser renders HTML before the CSS is fully loaded/applied.",
    hint: "Ugly page during load."
  },
  {
    id: 222,
    difficulty: "hard",
    category: "versioning",
    question: "What is a 'Breaking Change' in a library's versioning?",
    options: [
      "When the library stops working",
      "A change that is not backward compatible and requires users to update their code",
      "A bug fix",
      "Adding a new feature"
    ],
    answer: 1,
    explanation: "This should trigger a 'Major' version bump in SemVer.",
    hint: "Code update required by user."
  },
  {
    id: 223,
    difficulty: "medium",
    category: "cdn",
    question: "What is the primary risk of using a third-party CDN for your JavaScript libraries (like jQuery from a public URL)?",
    options: [
      "It is too fast",
      "Security (if the CDN is compromised, your site is compromised) and privacy",
      "It uses too much RAM",
      "It is illegal"
    ],
    answer: 1,
    explanation: "Subresource Integrity (SRI) hashes are used to mitigate this risk.",
    hint: "Trust and security."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "troubleshooting",
    question: "What is 'Subresource Integrity' (SRI)?",
    options: [
      "Checking the size of a file",
      "A security feature that allows browsers to verify that resources fetched (from a CDN) are delivered without unexpected manipulation",
      "A way to speed up the network",
      "A type of cookie"
    ],
    answer: 1,
    explanation: "It uses a cryptographic hash (integrity='sha384-...') to validate the file content.",
    hint: "Hash verification for scripts."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to debug a function that is triggered by a very fast mouse movement. Which console method helps visualize the frequency?",
    options: ["console.log", "console.count()", "console.trace()", "console.dir()"],
    answer: 1,
    explanation: "console.count() logs the number of times it has been called with a specific label.",
    hint: "Counting events."
  },
  {
    id: 226,
    difficulty: "hard",
    category: "backward_compatibility",
    question: "What is 'Autoprefixer'?",
    options: [
      "A tool that fixes typos",
      "A post-processor that adds vendor prefixes (-webkit-, -moz-) to CSS rules using values from Can I Use",
      "A way to rename variables",
      "A performance tool"
    ],
    answer: 1,
    explanation: "It ensures CSS properties work across different browser engines without manual effort.",
    hint: "Vendor prefixing."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does '403 Forbidden' usually mean for a script file?",
    options: [
      "The file does not exist",
      "The server understood the request but refuses to authorize it (likely file permissions)",
      "The server is down",
      "The file is too big"
    ],
    answer: 1,
    explanation: "Usually, the file exists, but the web server (Nginx/Apache) doesn't have read access to it.",
    hint: "Permission denied."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "cdn",
    question: "What is 'Geo-Blocking' in a CDN?",
    options: [
      "Blocking rocks",
      "Restricting access to content based on the user's geographical location (via IP address)",
      "A type of GPS",
      "Speeding up the network"
    ],
    answer: 1,
    explanation: "Often used for licensing restrictions (e.g., Netflix content available in only some countries).",
    hint: "Location-based restriction."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "versioning",
    question: "Which file in a Node.js project ensures that all developers use the exact same versions of dependencies?",
    options: ["package.json", "package-lock.json", "index.js", "README.md"],
    answer: 1,
    explanation: "package-lock.json (or yarn.lock) records the exact version of every installed package and sub-dependency.",
    hint: "Locking the versions."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "scenarios",
    question: "Your site works on WiFi but is slow on 3G. Which performance metric is most likely the culprit for the 'feeling' of sluggishness?",
    options: ["CPU Speed", "Latency (TTFB) and heavy payloads", "Monitor resolution", "HTML syntax"],
    answer: 1,
    explanation: "High latency and large JS bundles significantly impact slow connections.",
    hint: "Network delay."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does 'console.trace()' do?",
    options: [
      "Draws a line in the console",
      "Outputs a stack trace to the console, showing the path the code took to reach that point",
      "Deletes the log",
      "Finds the variable location"
    ],
    answer: 1,
    explanation: "Very useful for finding out which function called another function in complex applications.",
    hint: "Stack trace display."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Resource Hints'?",
    options: [
      "Hints for writing code",
      "A set of browser instructions like preconnect, preload, and prefetch to optimize resource loading",
      "Comments in the HTML",
      "Debugging tips"
    ],
    answer: 1,
    explanation: "These help the browser prioritize which assets to download first.",
    hint: "Guiding the browser."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "backward_compatibility",
    question: "Why should you avoid using 'User-Agent' sniffing to determine browser features?",
    options: [
      "It is too fast",
      "User-Agent strings are often unreliable, spoofed, or overly complex",
      "It is illegal",
      "It only works on desktop"
    ],
    answer: 1,
    explanation: "Feature detection is a much more robust pattern than checking strings like 'Mozilla/5.0...'.",
    hint: "Unreliable browser strings."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "cdn",
    question: "What is 'Anycast' routing?",
    options: [
      "A way to broadcast to everyone",
      "A network routing method where a single IP address is shared by multiple servers in different locations; traffic is routed to the 'nearest' one",
      "A type of database",
      "A security protocol"
    ],
    answer: 1,
    explanation: "Anycast is a core technology that allows CDNs to provide low latency globally.",
    hint: "One IP, many locations."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "versioning",
    question: "What does a tilde (~) in 'package.json' versions mean (e.g., '~1.2.3')?",
    options: [
      "Allow any version",
      "Allow only patch updates (1.2.x)",
      "Allow minor updates (1.x.x)",
      "Exact version only"
    ],
    answer: 1,
    explanation: "Tilde allows patch-level changes; Caret (^) allows minor-level changes.",
    hint: "Patch-level updates."
  },
  {
    id: 236,
    difficulty: "hard",
    category: "troubleshooting",
    question: "You see 'Maximum call stack size exceeded'. What is happening?",
    options: [
      "The computer ran out of RAM",
      "Infinite recursion (a function calling itself without a base case)",
      "The array is too big",
      "Too many users on the site"
    ],
    answer: 1,
    explanation: "The 'stack' is a limited memory area for function calls; infinite recursion fills it up quickly.",
    hint: "Infinite function calls."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "backward_compatibility",
    question: "What is 'Graceful Degradation'?",
    options: [
      "The site crashing slowly",
      "Building a site with full features for modern browsers, then ensuring it still 'works' (though maybe looks simpler) in older ones",
      "Deleting old code",
      "A type of CSS animation"
    ],
    answer: 1,
    explanation: "It is the opposite of Progressive Enhancement.",
    hint: "Top-down compatibility."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "cdn",
    question: "What is 'Stale-While-Revalidate'?",
    options: [
      "A broken cache",
      "A cache strategy where the CDN serves stale content while simultaneously fetching an update from the origin in the background",
      "Deleting old files",
      "A security bug"
    ],
    answer: 1,
    explanation: "This provides the best of both worlds: instant response (from cache) and eventual freshness.",
    hint: "Serve old, fetch new."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "performance",
    question: "What is the 'DOMContentLoaded' event?",
    options: [
      "When the page is fully loaded including images",
      "When the HTML is fully parsed and the DOM tree is built, but external assets like images might not be ready",
      "When the user clicks a button",
      "When the browser closes"
    ],
    answer: 1,
    explanation: "This happens before the 'load' event.",
    hint: "DOM ready, assets pending."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "scenarios",
    question: "A script from a CDN fails to load (404). How can you ensure your site still works?",
    options: [
      "It is impossible",
      "Use a 'fallback' script (e.g., if (!window.jQuery) { loadLocalScript(); })",
      "The site will always work",
      "Ask the user to refresh"
    ],
    answer: 1,
    explanation: "Local fallbacks are critical for high-availability production applications.",
    hint: "Local backup."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does 'Strict MIME Type Checking' prevent?",
    options: [
      "Slow internet",
      "MIME sniffing attacks (where a browser tries to guess the file type and might execute a malicious text file as a script)",
      "Big files",
      "Duplicate code"
    ],
    answer: 1,
    explanation: "It ensures that if a server says a file is 'text/plain', the browser won't treat it as 'text/javascript'.",
    hint: "No-sniff security."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "versioning",
    question: "What is 'LTS' (Long Term Support) in the context of Node.js?",
    options: [
      "A faster version of Node",
      "A version of Node that is guaranteed to receive security updates and bug fixes for a long period (usually 3 years)",
      "A version for mobile phones",
      "The latest experimental features"
    ],
    answer: 1,
    explanation: "LTS versions are recommended for most users and production environments.",
    hint: "Stability and longevity."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "cdn",
    question: "What is 'Brotli'?",
    options: [
      "A type of Italian bread",
      "A modern compression algorithm developed by Google that is often more efficient than Gzip",
      "A JavaScript library",
      "A CSS framework"
    ],
    answer: 1,
    explanation: "Most modern browsers and CDNs support Brotli for smaller asset sizes.",
    hint: "Advanced Gzip alternative."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "backward_compatibility",
    question: "What is 'Progressive Enhancement'?",
    options: [
      "Adding features slowly",
      "Starting with a basic, functional version for all browsers, then adding advanced features for browsers that support them",
      "Using only modern JS",
      "A type of project management"
    ],
    answer: 1,
    explanation: "This ensures the core content is accessible to everyone regardless of their browser's age.",
    hint: "Bottom-up compatibility."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "troubleshooting",
    question: "You see 'Uncaught ReferenceError: x is not defined'. What is the most likely cause?",
    options: [
      "The variable 'x' exists but is null",
      "You are trying to use variable 'x' without declaring it",
      "Variable 'x' is too big",
      "Syntax error in the file"
    ],
    answer: 1,
    explanation: "This happens when you try to access a variable that has never been declared with var, let, or const.",
    hint: "Missing declaration."
  },
  {
    id: 246,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Image Spriting'?",
    options: [
      "A type of ghost",
      "Combining multiple small images into a single large image to reduce the number of HTTP requests",
      "Compressing images",
      "Changing image colors"
    ],
    answer: 1,
    explanation: "Though less common with HTTP/2, it was a staple optimization for HTTP/1.1.",
    hint: "Combining assets."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "versioning",
    question: "What does the caret (^) in 'package.json' versions mean (e.g., '^1.2.3')?",
    options: [
      "Exact version only",
      "Allow minor and patch updates (1.x.x) but not major ones",
      "Allow only patch updates",
      "Allow any version"
    ],
    answer: 1,
    explanation: "Caret is the default in npm; it allows backward-compatible updates.",
    hint: "Minor-level updates."
  },
  {
    id: 248,
    difficulty: "hard",
    category: "scenarios",
    question: "A script is working in Chrome but failing in Safari. What is the best first step?",
    options: [
      "Delete Safari",
      "Check 'Can I Use' for the specific methods used in the script",
      "Rewrite the whole script",
      "Ask the user to change browsers"
    ],
    answer: 1,
    explanation: "Safari often lags behind Chrome in implementing the latest Web APIs.",
    hint: "Cross-browser audit."
  },
  {
    id: 249,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What is the difference between 'Console.log' and 'Console.dir'?",
    options: [
      "log is for strings; dir is for numbers",
      "log prints a string representation; dir prints an interactive list of the properties of the specified JavaScript object",
      "They are identical",
      "dir is only for files"
    ],
    answer: 1,
    explanation: "Console.dir() is particularly useful for inspecting DOM elements as objects rather than as HTML tags.",
    hint: "Object property inspection."
  },
  {
    id: 250,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Main Thread'?",
    options: [
      "A physical wire in the CPU",
      "Where the browser processes user events, paints the screen, and executes most JavaScript",
      "A type of network cable",
      "The server's main loop"
    ],
    answer: 1,
    explanation: "Keeping the main thread 'unblocked' is the key to a smooth user experience.",
    hint: "The UI and Logic engine."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: Memory Management, Asynchronous Patterns, DOM Performance, and ES6+ logic.
const hotsQuestions = [
    // 1. Core Engine & Memory (Prototypes, WeakMap, Closures, Garbage Collection) - 20 indices
    2, 3, 5, 10, 15, 20, 25, 45, 50, 55, 
    60, 65, 70, 75, 80, 85, 150, 155, 160, 249,

    // 2. Asynchronous JS (Event Loop, Promises, Async/Await, Web Workers) - 20 indices
    8, 9, 12, 13, 14, 110, 115, 120, 125, 130, 
    135, 140, 145, 200, 205, 210, 215, 220, 225, 250,

    // 3. Functional Programming & Logic (Currying, Memoization, Hoisting) - 15 indices
    21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 
    170, 175, 180, 185, 190,

    // 4. DOM & Browser APIs (Event Delegation, Intersection Observer, Storage) - 15 indices
    33, 34, 36, 37, 38, 39, 41, 42, 230, 235, 
    240, 245, 246, 247, 248,

    // 5. Modern ES6+ & Modular Patterns (Destructuring, Proxy, Modules) - 15 indices
    43, 44, 46, 47, 48, 49, 100, 101, 102, 103, 
    104, 105, 106, 107, 108,

    // 6. Troubleshooting & Cross-Browser Development - 15 indices
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 
    165, 166, 167, 168, 169
];

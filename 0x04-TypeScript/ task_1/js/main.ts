// Interface defining the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Usage examples
console.log(printTeacher("John", "Doe"));   // Output: John Doe
console.log(printTeacher("Joe", "Smith"));  // Output: Joe Smith
console.log(printTeacher("Sara", "Johnson")); // Output: Sara Johnson

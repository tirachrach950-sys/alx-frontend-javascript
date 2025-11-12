
// Interface for the object argument
interface Person {
  firstName: string;
  lastName: string;
}

// Function that accepts firstName and lastName and returns "FirstName LastName"
function printTeacher(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

// Calling the function with two arguments
const message1 = printTeacher("John", "Doe");
console.log(message1); // Output: John Doe
// Interface defining the function signature
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function that returns the first initial and full lastName
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return firstName.charAt(0) + ". " + lastName;
};

// Example usage
const message1 = printTeacher("John", "Doe");
console.log(message1); // Output: J. Doe

const message2 = printTeacher("Sara", "Smith");
console.log(message2); // Output: S. Smith




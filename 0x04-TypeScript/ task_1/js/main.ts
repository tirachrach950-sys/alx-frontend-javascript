
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




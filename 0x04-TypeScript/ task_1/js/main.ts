
// Interface for the object argument
interface Person {
  firstName: string;
  lastName: string;
}

// Interface for the object argument
interface Person {
  firstName?: string;
  lastName?: string;
}

// Function that accepts a Person object with destructuring
function printTeacher({ firstName, lastName }: Person): string {
  return firstName + " " + lastName;
}

// Calling the function with an object
const teacher = { firstName: "John", lastName: "Doe" };
const message1 = printTeacher(teacher);

console.log(message1); // Output: John Doe

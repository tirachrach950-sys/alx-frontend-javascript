// Interface for the printTeacher function
interface printTeacherFunction {
  (person: { firstName: string; lastName: string }): string;
}

// Implementation of the function
const printTeacher: printTeacherFunction = (person) => {
  // Get the first letter of firstName
  const firstInitial = person.firstName.charAt(0);
  // Return formatted string: "F. LastName"
  return `${firstInitial}. ${person.lastName}`;
};

// Person objects
const person1 = { firstName: "Joe", lastName: "Smith" };
const person2 = { firstName: "Sara", lastName: "Johnson" };

// Usage examples
console.log(printTeacher(person1)); // Output: J. Smith
console.log(printTeacher(person2)); // Output: S. Johnson

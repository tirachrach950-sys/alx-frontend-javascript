// Interface for the function
export interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Correct implementation of the function
export const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe

// Additional examples if needed
console.log(printTeacher({ firstName: "Alice", lastName: "Smith" })); // Output: A. Smith
console.log(printTeacher({ firstName: "Bob", lastName: "Brown" }));   // Output: B. Brown

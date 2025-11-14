// Interface for the function
export interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation
export const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe

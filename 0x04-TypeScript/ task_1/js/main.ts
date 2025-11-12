// Interface defining the structure of the printTeacher function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Implementation of the function
const printTeacher: printTeacherFunction = (teacher) => {
  // Extract the first letter of firstName
  const firstInitial = teacher.firstName.charAt(0);
  // Return formatted string: "F. LastName"
  return `${firstInitial}. ${teacher.lastName}`;
};

// Example usage
const teacher1 = { firstName: "Joe", lastName: "Smith" };
const teacher2 = { firstName: "Sara", lastName: "Johnson" };

console.log(printTeacher(teacher1)); // Output: J. Smith
console.log(printTeacher(teacher2)); // Output: S. Johnson

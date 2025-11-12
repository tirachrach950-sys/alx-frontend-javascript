/**
 * Interface for the printTeacher function
 */
interface printTeacherFunction {
  (obj: { firstName: string; lastName: string }): string;
}

/**
 * Function implementation
 * Accepts an object with firstName and lastName
 * Returns: first letter of firstName + ". " + lastName
 */
const printTeacher: printTeacherFunction = function(obj) {
  return obj.firstName.charAt(0) + ". " + obj.lastName;
};

// Example usage
const teacher = { firstName: "John", lastName: "Doe" };
console.log(printTeacher(teacher)); // Output: J. Doe

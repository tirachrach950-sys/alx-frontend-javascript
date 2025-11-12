/**
 * -------------------------
 * printTeacher function interface
 * -------------------------
 */
interface printTeacherFunction {
  (obj: { firstName: string; lastName: string }): string;
}

/**
 * -------------------------
 * printTeacher function implementation
 * -------------------------
 */
const printTeacher: printTeacherFunction = function(obj) {
  return obj.firstName.charAt(0) + ". " + obj.lastName;
};

// Example usage (for testing purposes)
const teacher = { firstName: "John", lastName: "Doe" };
console.log(printTeacher(teacher)); // Output: J. Doe

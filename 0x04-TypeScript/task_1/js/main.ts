/**
 * Interface defining the structure of the printTeacher function.
 * It specifies that the function must accept two string arguments (firstName, lastName)
 * and must return a string.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implements the printTeacherFunction interface.
 *
 * @param firstName The first name of the teacher (e.g., "John").
 * @param lastName The last name of the teacher (e.g., "Doe").
 * @returns A formatted string with the first initial of the first name and the full last name (e.g., "J. Doe").
 */
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // Get the first letter of the firstName and ensure it's capitalized
  const firstInitial = firstName.charAt(0).toUpperCase();

  // Return the formatted string: "F. LastName"
  // The 'lastName' is used exactly as provided.
  return `${firstInitial}. ${lastName}`;
};

// You can uncomment the examples below to test the function:
/*
console.log(printTeacher("John", "Doe"));      // Output: J. Doe
console.log(printTeacher("barbara", "Jenkins")); // Output: B. Jenkins
*/

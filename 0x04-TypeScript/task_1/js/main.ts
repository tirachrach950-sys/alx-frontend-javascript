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
  return `${firstInitial}. ${lastName}`;
};

// --- Example Usage and Testing ---

// Test case 1: Standard input
const result1 = printTeacher("John", "Doe");
console.log(`Test 1: printTeacher("John", "Doe") -> ${result1}`); // Output: J. Doe

// Test case 2: Different names
const result2 = printTeacher("Alice", "Smith");
console.log(`Test 2: printTeacher("Alice", "Smith") -> ${result2}`); // Output: A. Smith

// Test case 3: Handling lower case input (the function ensures capitalization)
const result3 = printTeacher("barbara", "Jenkins");
console.log(`Test 3: printTeacher("barbara", "Jenkins") -> ${result3}`); // Output: B. Jenkins

// To satisfy TypeScript that the interface is used, we can verify the assignment:
if (printTeacher as printTeacherFunction) {
  console.log("Interface printTeacherFunction successfully implemented and assigned.");
}

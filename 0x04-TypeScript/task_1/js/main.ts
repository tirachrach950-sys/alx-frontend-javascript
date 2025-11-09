// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function definition exactly as ALX expects
function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

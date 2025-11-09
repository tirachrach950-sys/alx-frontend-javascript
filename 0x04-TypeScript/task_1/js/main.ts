// Define the Teacher interface
interface Teacher {
  readonly firstName: string;       // Only settable on initialization
  readonly lastName: string;        // Only settable on initialization
  fullTimeEmployee: boolean;        // Mandatory
  yearsOfExperience?: number;       // Optional
  location: string;                 // Mandatory
  [key: string]: any;               // Allow additional properties like contract
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;          // Mandatory attribute
}

// Example Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

console.log(director1);
/* Expected console output:
Object
firstName: "John"
lastName: "Doe"
fullTimeEmployee: true
location: "London"
numberOfReports: 17
*/

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

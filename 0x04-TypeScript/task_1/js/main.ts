// Define the Teacher interface
interface Teacher {
  readonly firstName: string;       // Only settable on initialization
  readonly lastName: string;        // Only settable on initialization
  fullTimeEmployee: boolean;        // Mandatory
  yearsOfExperience?: number;       // Optional
  location: string;                 // Mandatory
  [key: string]: any;               // Allow additional properties
}

// Create some Teacher objects
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'London'
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  year
// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: "J. Doe"
// Teacher interface
interface Teacher {
  readonly firstName: string;     // Only settable on initialization
  readonly lastName: string;      // Only settable on initialization
  fullTimeEmployee: boolean;      // Mandatory
  yearsOfExperience?: number;     // Optional
  location: string;               // Mandatory
  [key: string]: any;             // Allow additional properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;        // Mandatory attribute
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

console.log(director1);
/* Expected output:
Object
firstName: "John"
fullTimeEmployee: true
lastName: "Doe"
location: "London"
numberOfReports: 17
*/

console.log(printTeacher("Alice", "Smith")); // Output: "A. Smith"


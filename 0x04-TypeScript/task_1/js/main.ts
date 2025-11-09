// Define the Teacher interface
interface Teacher {
  readonly firstName: string;     // Only settable on initialization
  readonly lastName: string;      // Only settable on initialization
  fullTimeEmployee: boolean;      // Mandatory
  yearsOfExperience?: number;     // Optional
  location: string;               // Mandatory
  [key: string]: any;             // Allow additional properties
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;        // Mandatory attribute
}

// Example Teacher objects
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'London'
};

const teacher2: Teacher = {
  firstName: 'Bob',
  // Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Mandatory attribute
}

  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'Paris'
};

// Example Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));     // Output: "J. Doe"
console.log(printTeacher("Alice", "Smith"));  // Output: "A. Smith"
console.log(director1);                       // Output: Director object

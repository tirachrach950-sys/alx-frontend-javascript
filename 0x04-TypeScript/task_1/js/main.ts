// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example Teacher objects
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
  yearsOfExperience: 5,
};

const teacher4: Teacher = {
  firstName: 'Anna',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
};

// Example Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

// Test printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Anna", "Smith")); // Output: A. Smith

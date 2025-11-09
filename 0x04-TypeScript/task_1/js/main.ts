// 1️⃣ Teacher interface
interface Teacher {
  readonly firstName: string;        // Set only at initialization
  readonly lastName: string;         // Set only at initialization
  fullTimeEmployee: boolean;         // Required
  yearsOfExperience?: number;        // Optional
  location: string;                  // Required
  [key: string]: any;                // Allow additional properties
}

// 2️⃣ Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;           // Required
}

// 3️⃣ Example Teachers
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
  location: 'Paris'
};

// 4️⃣ Example Director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

// 5️⃣ Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 6️⃣ Implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 7️⃣ Usage examples
console.log(printTeacher("John", "Doe"));    // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith
console.log(director1);

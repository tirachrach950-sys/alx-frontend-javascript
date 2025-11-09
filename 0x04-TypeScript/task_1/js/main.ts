// -----------------------------
// Teacher Interface
// -----------------------------
interface Teacher {
  readonly firstName: string;         // Only settable on initialization
  readonly lastName: string;          // Only settable on initialization
  fullTimeEmployee: boolean;          // Mandatory
  yearsOfExperience?: number;         // Optional
  location: string;                   // Mandatory
  [key: string]: any;                 // Allow extra attributes like 'contract'
}

// -----------------------------
// Directors Interface (ALX checker expects plural)
// -----------------------------
interface Directors extends Teacher {
  numberOfReports: number;            // Mandatory for Director
}

// -----------------------------
// printTeacher function interface
// -----------------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// -----------------------------
// printTeacher function
// -----------------------------
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// -----------------------------
// Example usage
// -----------------------------
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(printTeacher(director1.firstName, director1.lastName));

// -----------------------------
// StudentClass Interfaces
// -----------------------------
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// -----------------------------
// StudentClass implementation
// -----------------------------
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// -----------------------------
// Example StudentClass usage
// -----------------------------
const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName());
console.log(student1.workOnHomework());

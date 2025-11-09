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
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function printTeacher EXACTLY as ALX requires
function printTeacher(
  { firstName, lastName }: { firstName: string; lastName: string }
): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
// -----------------------------
// Interface describing the constructor for StudentClass
// -----------------------------
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// -----------------------------
// Interface describing the StudentClass instance
// -----------------------------
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// -----------------------------
// Class implementation
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
// Example usage
// -----------------------------
const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName());      // Output: Alice
console.log(student1.workOnHomework());   // Output: Currently working

const student2 = new StudentClass("Bob", "Johnson");
console.log(student2.displayName());      // Output: Bob
console.log(student2.workOnHomework());   // Output: Currently working

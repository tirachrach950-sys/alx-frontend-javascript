/**
 * -------------------------
 * Teacher Interface
 * -------------------------
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/**
 * -------------------------
 * Director Interface
 * -------------------------
 */
interface Director extends Teacher {
  numberOfReports: number;
}

/**
 * -------------------------
 * printTeacher function interface
 * -------------------------
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * -------------------------
 * printTeacher function
 * -------------------------
 */
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
};

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe

/**
 * -------------------------
 * StudentClass constructor interface
 * -------------------------
 */
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

/**
 * -------------------------
 * StudentClass methods interface
 * -------------------------
 */
interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * -------------------------
 * StudentClass definition
 * -------------------------
 */
class StudentClass implements StudentClassMethods {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName());       // Alice
console.log(student1.workOnHomework());    // Currently working

/**
 * -------------------------
 * Example Teachers & Director
 * -------------------------
 */
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  yearsOfExperience: 5,
  contract: false,
};

const teacher2: Teacher = {
  firstName: "Anna",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "New York",
};

// Director example
const director1: Director = {
  firstName: "Robert",
  lastName: "Brown",
  fullTimeEmployee: true,
  location: "Paris",
  numberOfReports: 17,
};

// Logging all
console.log(teacher1);
console.log(teacher2);
console.log(director1);
console.log(printTeacher(director1.firstName, director1.lastName)); // R. Brown
/**
 * Interface for the printTeacher function
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Function that returns the first letter of firstName followed by full lastName
 */
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith

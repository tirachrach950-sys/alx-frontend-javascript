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
// Interface describing the instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class definition (ALX expects this exact syntax)
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName());      // Alice
console.log(student1.workOnHomework());   // Currently working

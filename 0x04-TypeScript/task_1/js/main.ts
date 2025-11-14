// Interface describing the constructor arguments for StudentClass
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// StudentClass definition
class StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
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

// Interface for the printTeacher function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

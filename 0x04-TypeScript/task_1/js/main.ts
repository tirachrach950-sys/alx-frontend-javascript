// task_1/js/main.ts

// Interface for constructor arguments
export interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class
export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class definition as ALX expects
export class StudentClass {
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
const student = new StudentClass("Guillaume", "Salva");
console.log(student.displayName());       // Guillaume
console.log(student.workOnHomework());    // Currently working

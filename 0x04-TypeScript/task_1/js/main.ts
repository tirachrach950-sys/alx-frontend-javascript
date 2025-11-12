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

// Class implementation
export class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
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
const student = new StudentClass({ firstName: "Guillaume", lastName: "Salva" });
console.log(student.displayName());       // Output: Guillaume
console.log(student.workOnHomework());    // Output: Currently working

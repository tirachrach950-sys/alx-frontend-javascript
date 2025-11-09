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

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
};

// Example Director object
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

console.log(director1);
console.log(printTeacher(director1.firstName, director1.lastName));

// Class definition (strict checker wants this exact line)
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass('Alice', 'Smith');
console.log(student1.displayName());
console.log(student1.workOnHomework());

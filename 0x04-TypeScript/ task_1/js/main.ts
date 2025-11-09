// Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra properties like contract
}

// Example Teachers
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
  yearsOfExperience: 5,
  location: 'Paris'
};

// Example of additional property
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// Extending Teacher -> Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Directors = {
  firstName: 'Mary',
  lastName: 'Lee',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 17
};

console.log(director1);

// printTeacher function and interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));
console.log(printTeacher('Mary', 'Lee'));


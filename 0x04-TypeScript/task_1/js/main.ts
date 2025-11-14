// Interface for Teacher object
export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // Allow additional properties like 'contract'
}

// Interface for the printTeacher function
export interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation
export const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "New York",
  contract: true,
};

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
console.log(printTeacher({ firstName: "Jane", lastName: "Smith" })); // Output: J. Smith

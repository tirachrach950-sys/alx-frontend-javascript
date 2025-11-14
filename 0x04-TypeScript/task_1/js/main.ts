// Interface for Teacher object
export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // Allow extra properties like 'contract'
}

// Interface for the printTeacher function
export interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function that accepts an object with firstName and lastName
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

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe

// Interface for the object argument
interface Person {
  firstName: string;
  lastName: string;
}

// Interface for the function
interface PrintTeacherFunction {
  (person: Person): string;
}

// Function implementation
const printTeacher: PrintTeacherFunction = (person) => {
  const firstInitial = person.firstName[0];
  return `${firstInitial}. ${person.lastName}`;
};

// Example usage
const teacher1: Person = { firstName: 'Joe', lastName: 'Sara' };
const teacher2: Person = { firstName: 'John', lastName: 'Doe' };

console.log(printTeacher(teacher1)); // Output: J. Sara
console.log(printTeacher(teacher2)); // Output: J. Doe


// Interface for the object argument
interface Person {
  firstName: string;
  lastName: string;
}

interface PrintTeacherFunction {
  firstName: string;
  lastName: string;
}

const teacher: PrintTeacherFunction = {
  firstName: "john",
  lastName: "doe"
};

console.log("john", "doe");




const teacher1: Person = { firstName: 'Joe', lastName: 'Sara' };
const teacher2: Person = { firstName: 'John', lastName: 'Doe' };

console.log(printTeacher(teacher1)); // Output: J. Sara
console.log(printTeacher(teacher2)); // Output: J. Doe

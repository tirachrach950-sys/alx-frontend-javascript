
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





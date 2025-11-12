interface Teacher {
  firstName: string;
  lastName: string;
}

function printTeacher(teacher: Teacher): string {
  return `{teacher.firstName.charAt(0)}. {teacher.lastName}`;
}

// Example usage:
const myTeacher = { firstName: "John", lastName: "Doe" };
console.log(printTeacher(myTeacher)); // Output: J. Doe

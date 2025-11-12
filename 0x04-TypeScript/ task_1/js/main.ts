/**
 * -------------------------
 * Teacher Interface
 * -------------------------
 */
interface Teacher {
  readonly firstName: string;          // Only settable during initialization
  readonly lastName: string;           // Only settable during initialization
  fullTimeEmployee: boolean;           // Mandatory
  yearsOfExperience?: number;          // Optional
  location: string;                     // Mandatory
  [key: string]: any;                   // Allow extra attributes like contract
}

/**
 * -------------------------
 * Directors Interface
 * -------------------------
 */
interface Directors extends Teacher {
  numberOfReports: number;             // Mandatory Director-specific property
}

/**
 * -------------------------
 * printTeacher function interface
 * -------------------------
 */
interface printTeacherFunction {
  (obj: { firstName: string; lastName: string }): string;
}

/**
 * -------------------------
 * printTeacher function
 * -------------------------
 */
const printTeacher: printTeacherFunction = (obj) => {
  return `${obj.firstName[0]}. ${obj.lastName}`;
};

/**
 * -------------------------
 * Example usage of Teacher & Directors
 * -------------------------
 */
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  yearsOfExperience: 5,
  contract: false,
};

const director1: Directors = {
  firstName: "Robert",
  lastName: "Brown",
  fullTimeEmployee: true,
  location: "Paris",
  numberOfReports: 17,
};

console.log(teacher1);
console.log(director1);
console.log(printTeacher({ firstName: director1.firstName, lastName: director1.lastName })); // R. Brown

// Define the interface for the function
interface PrintTeacherFunction {
    /**
     * Concatenates and returns the first name and last name of a teacher.
     * @param firstname The first name of the teacher.
     * @param lastname The last name of the teacher.
     * @returns The full name as a single string.
     */
    (firstname: string, lastname: string): string;
}

// Implement the function that adheres to the interface
const printteacher: PrintTeacherFunction = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`;
};

// Example usage:
const fullName: string = printteacher("john", "doe");
console.log(fullName); // Output: john doe

// Define the interface for the input object (usually named with I prefix or type suffix)
interface TeacherName {
    firstName: string;
    lastName: string;
}

/**
 * Formats and returns the teacher's name as "F. LastName".
 * @param nameObj An object containing the first name and last name.
 * @returns The formatted name string.
 */
export const printTeacher = ({ firstName, lastName }: TeacherName): string => {
    const initial: string = firstName.charAt(0);
    return `${initial}. ${lastName}`;
};

// --- Example usage (for testing purposes, not part of the core function) ---
const teacher: TeacherName = { firstName: "John", lastName: "Doe" };
const result: string = printTeacher(teacher);
console.log(result); // Expected output: J. Doe

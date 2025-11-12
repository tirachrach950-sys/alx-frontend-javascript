// Define the interface for the input object 
interface TeacherName {
    firstName: string;
    lastName: string;
}
 const printTeacher = ({ firstName, lastName }: TeacherName): string => {
    const initial: string = firstName.charAt(0);
    return `${initial}. ${lastName}`;
};
const teacher: TeacherName = { firstName: "John", lastName: "Doe" };
const result: string = printTeacher(teacher);
console.log(result); 

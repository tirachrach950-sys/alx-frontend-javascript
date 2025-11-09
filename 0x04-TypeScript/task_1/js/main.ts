// Define the Teacher interface
interface Teacher {
  readonly firstName: string;       // Only settable on initialization
  readonly lastName: string;        // Only settable on initialization
  fullTimeEmployee: boolean;        // Mandatory
  yearsOfExperience?: number;       // Optional
  location: string;                 // Mandatory
  [key: string]: any;               // Allow additional properties
}

// Create some Teacher objects
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'London'
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  year


/**
 * Interface definition for a Teacher object.
 * - firstName and lastName are readonly, as they should only be modifiable on initialization.
 * - fullTimeEmployee and location are mandatory.
 * - yearsOfExperience is optional.
 * - The index signature allows for arbitrary extra attributes, like 'contract',
 * while ensuring compatibility with all explicitly defined property types.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // yearsOfExperience can be a number or undefined
  location: string;
  
  // Index signature to allow for arbitrary string properties (like 'contract').
  [key: string]: string | boolean | number | undefined | any; 
}

/**
 * Interface definition for a Director object.
 * It extends the Teacher interface, inheriting all its properties (including readonly and optional ones),
 * and adds the mandatory 'numberOfReports' attribute.
 */
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage demonstrating the mandatory, optional, readonly, and extra attributes for Teacher.
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Extra attribute allowed by the index signature
  yearsOfExperience: 5, // Optional attribute included
};

const teacher4: Teacher = {
  firstName: 'Anna',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  // yearsOfExperience is omitted (it's optional, so it is undefined)
  // No extra attributes are included, which is also valid
};

// Example usage demonstrating the Director interface.
// Note: We use the singular 'Director' interface here.
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Mandatory Director-specific attribute
};


console.log('--- Teacher 3 Details ---');
console.log(teacher3);

console.log('\n--- Teacher 4 Details ---');
console.log(teacher4);

console.log('\n--- Director 1 Details ---');
console.log(director1);


// Demonstration of readonly constraint (TypeScript compiler check - uncomment to see error)
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.

// Demonstration of mandatory properties check (TypeScript compiler check - uncomment to see error)
/*
const invalidTeacher: Teacher = {
  firstName: 'Test',
  lastName: 'Test',
  // location is missing
  fullTimeEmployee: true, 
}; 
// Error: Property 'location' is missing in type '{ firstName: string; lastName: string; fullTimeEmployee: true; }'
*/

/**
 * A helper function to print teacher/director details for clarity in the console output.
 * Since Director extends Teacher, this function works for both types.
 * @param entity The teacher or director object to display.
 */
function displayTeacher(entity: Teacher): void {
  console.log('Object:');
  // Iterate through the keys to print all properties, including arbitrary ones.
  for (const key in entity) {
    // Check if the property is directly on the object and not from prototype chain
    if (Object.prototype.hasOwnProperty.call(entity, key)) {
        console.log(`  ${key}: ${entity[key]}`);
    }
  }
}

console.log('\n--- Display Teacher 3 (Formatted Output) ---');
displayTeacher(teacher3);

console.log('\n--- Display Director 1 (Formatted Output) ---');
displayTeacher(director1);
// This output format closely matches the requested example printout whe
/**
 * Interface definition for a Teacher object.
 * - firstName and lastName are readonly, as they should only be modifiable on initialization.
 * - fullTimeEmployee and location are mandatory.
 * - yearsOfExperience is optional.
 * - The index signature allows for arbitrary extra attributes, like 'contract',
 * while ensuring compatibility with all explicitly defined property types.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // yearsOfExperience can be a number or undefined
  location: string;
  
  // Index signature to allow for arbitrary string properties (like 'contract').
  [key: string]: string | boolean | number | undefined | any; 
}

/**
 * Interface definition for a Director object.
 * It extends the Teacher interface, inheriting all its properties (including readonly and optional ones),
 * and adds the mandatory 'numberOfReports' attribute.
 */
interface Director extends Teacher {
  numberOfReports: number;
}

/**
 * Interface definition for the printTeacher function signature.
 * It specifies that the function takes two string arguments and returns a string.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Function to format a teacher's name as: First Initial. Last Name.
 * The function is typed implicitly by its signature and should conform to printTeacherFunction.
 * @param firstName The first name of the teacher.
 * @param lastName The last name of the teacher.
 * @returns A formatted string (e.g., "J. Doe").
 */
function printTeacher(firstName: string, lastName: string): string {
  // Get the first letter of the firstName
  const firstInitial = firstName.charAt(0); 
  // Return the first initial followed by a period, space, and the full last name.
  return `${firstInitial}. ${lastName}`;
}


// Example usage demonstrating the mandatory, optional, readonly, and extra attributes for Teacher.
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Extra attribute allowed by the index signature
  yearsOfExperience: 5, // Optional attribute included
};

const teacher4: Teacher = {
  firstName: 'Anna',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  // yearsOfExperience is omitted (it's optional, so it is undefined)
  // No extra attributes are included, which is also valid
};

// Example usage demonstrating the Director interface.
// Note: We use the singular 'Director' interface here.
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Mandatory Director-specific attribute
};


console.log('--- Teacher 3 Details ---');
console.log(teacher3);

console.log('\n--- Director 1 Details ---');
console.log(director1);

console.log('\n--- Print Teacher Function Example ---');
// Example output: J. Doe
console.log(`John Doe: ${printTeacher("John", "Doe")}`); 
// Example output: J. Doe (from director1 data)
console.log(`Anna Smith: ${printTeacher(director1.firstName, director1.lastName)}`);


// Demonstration of readonly constraint (TypeScript compiler check - uncomment to see error)
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.

// Demonstration of mandatory properties check (TypeScript compiler check - uncomment to see error)
/*
const invalidTeacher: Teacher = {
  firstName: 'Test',
  lastName: 'Test',
  // location is missing
  fullTimeEmployee: true, 
}; 
// Error: Property 'location' is missing in type '{ firstName: string; lastName: string; fullTimeEmployee: true; }'
*/

/**
 * A helper function to print teacher/director details for clarity in the console output.
 * Since Director extends Teacher, this function works for both types.
 * @param entity The teacher or director object to display.
 */
function displayTeacher(entity: Teacher): void {
  console.log('Object:');
  // Iterate through the keys to print all properties, including arbitrary ones.
  for (const key in entity) {
    // Check if the property is directly on the object and not from prototype chain
    if (Object.prototype.hasOwnProperty.call(entity, key)) {
        console.log(`  ${key}: ${entity[key]}`);
    }
  }
}

console.log('\n--- Display Teacher 3 (Formatted Output) ---');
displayTeacher(teacher3);

console.log('\n--- Display Director 1 (Formatted Output) ---');
displayTeacher(director1);
// This output format closely matches the requested example printout when run in a Node/Browser environment.
/**
 * Interface definition for a Teacher object.
 * - firstName and lastName are readonly, as they should only be modifiable on initialization.
 * - fullTimeEmployee and location are mandatory.
 * - yearsOfExperience is optional.
 * - The index signature allows for arbitrary extra attributes, like 'contract',
 * while ensuring compatibility with all explicitly defined property types.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // yearsOfExperience can be a number or undefined
  location: string;
  
  // Index signature to allow for arbitrary string properties (like 'contract').
  [key: string]: string | boolean | number | undefined | any; 
}

/**
 * Interface definition for a Director object.
 * It extends the Teacher interface, inheriting all its properties (including readonly and optional ones),
 * and adds the mandatory 'numberOfReports' attribute.
 */
interface Director extends Teacher {
  numberOfReports: number;
}

/**
 * Interface definition for the printTeacher function signature.
 * It specifies that the function takes two string arguments and returns a string.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Function to format a teacher's name as: First Initial. Last Name.
 * The function is typed implicitly by its signature and should conform to printTeacherFunction.
 * @param firstName The first name of the teacher.
 * @param lastName The last name of the teacher.
 * @returns A formatted string (e.g., "J. Doe").
 */
function printTeacher(firstName: string, lastName: string): string {
  // Directly use string interpolation with the first letter of firstName
  return `${firstName.charAt(0)}. ${lastName}`;
}


// Example usage demonstrating the mandatory, optional, readonly, and extra attributes for Teacher.
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Extra attribute allowed by the index signature
  yearsOfExperience: 5, // Optional attribute included
};

const teacher4: Teacher = {
  firstName: 'Anna',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  // yearsOfExperience is omitted (it's optional, so it is undefined)
  // No extra attributes are included, which is also valid
};

// Example usage demonstrating the Director interface.
// Note: We use the singular 'Director' interface here.
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Mandatory Director-specific attribute
};


console.log('--- Teacher 3 Details ---');
console.log(teacher3);

console.log('\n--- Director 1 Details ---');
console.log(director1);

console.log('\n--- Print Teacher Function Example ---');
// Example output: J. Doe
console.log(`John Doe: ${printTeacher("John", "Doe")}`); 
// Example output: J. Doe (from director1 data)
console.log(`Anna Smith: ${printTeacher(director1.firstName, director1.lastName)}`);


// Demonstration of readonly constraint (TypeScript compiler check - uncomment to see error)
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.

// Demonstration of mandatory properties check (TypeScript compiler check - uncomment to see error)
/*
const invalidTeacher: Teacher = {
  firstName: 'Test',
  lastName: 'Test',
  // location is missing
  fullTimeEmployee: true, 
}; 
// Error: Property 'location' is missing in type '{ firstName: string; lastName: string; fullTimeEmployee: true; }'
*/

/**
 * A helper function to print teacher/director details for clarity in the console output.
 * Since Director extends Teacher, this function works for both types.
 * @param entity The teacher or director object to display.
 */
function displayTeacher(entity: Teacher): void {
  console.log('Object:');
  // Iterate through the keys to print all properties, including arbitrary ones.
  for (const key in entity) {
    // Check if the property is directly on the object and not from prototype chain
    if (Object.prototype.hasOwnProperty.call(entity, key)) {
        console.log(`  ${key}: ${entity[key]}`);
    }
  }
}

console.log('\n--- Display Teacher 3 (Formatted Output) ---');
displayTeacher(teacher3);

console.log('\n--- Display Director 1 (Formatted Output) ---');
displayTeacher(director1);
// This output format closely matches the requested example p

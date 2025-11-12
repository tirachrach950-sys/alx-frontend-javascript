/ Define the interface for the object
interface Person {
  firstName: string;
  lastName: string;
}

// Create a person object following the interface
let person: Person = {
  firstName: 'scripter',
  lastName: 'efendi', // comma is required here
};

// Access properties
console.log(person.firstName); // scripter
console.log(person.lastName);  // efendi

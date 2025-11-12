// task_2/js/main.ts

export interface Director {
  workDirectorTasks(): string;
  name: string;
}

export interface Teacher {
  workTeacherTasks(): string;
  name: string;
}

export type Employee = Teacher | Director;

// Function to create an employee
export function createEmployee(salary: number): Employee {
  if (salary < 500) {
    return {
      name: "John",
      workTeacherTasks: () => "Getting to work"
    } as Teacher;
  } else {
    return {
      name: "Jane",
      workDirectorTasks: () => "Getting to director tasks"
    } as Director;
  }
}

// Type predicate
export function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work
export function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// -------------------------
// Interfaces
// -------------------------
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// -------------------------
// Classes
// -------------------------
export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// -------------------------
// createEmployee function
// -------------------------
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  if (typeof salary === "string") {
    const numericSalary = parseInt(salary.replace(/[^0-9]/g, ""));
    if (numericSalary < 500) return new Teacher();
  }
  return new Director();
}

// -------------------------
// Type predicates & executeWork
// -------------------------
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) return employee.workDirectorTasks();
  return employee.workTeacherTasks();
}

// -------------------------
// String literal type for Subjects
// -------------------------
export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}


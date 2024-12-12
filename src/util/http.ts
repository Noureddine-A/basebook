import { Department } from "../classes/Department.ts";
import { Person } from "../classes/Person.ts";

export async function getDepartments(): Promise<Department[]> {
  const request = await fetch("http://localhost:3000/departments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  const departments = response.map((department: Department) => {
    return new Department(department.id, department.title);
  });

  return departments;
}

export async function getPeople(): Promise<Person[]> {
  const request = await fetch("http://localhost:3000/people", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  const people = response.map((person) => {
    return new Person(
      person.id,
      person.firstName,
      person.infix,
      person.lastName,
      person.departmentId,
      person.image,
      person.quote,
      person.phoneNumber
    );
  });

  return people;
}

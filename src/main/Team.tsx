import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { getDepartments, getPeople } from "../util/http.ts";
import { Department } from "../classes/Department.ts";
import { Person } from "../classes/Person.ts";
import TeamMember from "./TeamMember.tsx";

const Team = () => {
  const [people, setPeople] = useState([]);

  const loaderData = useLoaderData();

  useEffect(() => {
    setPeople(loaderData.people);
  }, [loaderData]);

  function onDepartmentFilterHandler(event) {
    const departmentId = Number(event.target.value);
    if (departmentId === 0) {
      return setPeople(loaderData.people);
    }
    const filteredPeople = loaderData.people.filter((person: Person) => {
      if (person.departmentId === departmentId) {
        return person;
      }
      return null;
    });

    setPeople(filteredPeople);
  }

  return (
    <div className="h-fit w-full">
      <div className="flex h-[10vh] w-full">
        <div className="flex items-center w-1/2 h-full">
          <h1 className="text-2xl font-bold">Meet the Team</h1>
        </div>
        <div className="flex items-center justify-end w-1/2 h-full">
          <select
            className="h-1/2 w-1/2 max-sm:w-4/5"
            name="departments"
            id="departments"
            onChange={onDepartmentFilterHandler}
          >
            <option value="0">Iedereen</option>
            {loaderData.departments.map((department: Department) => {
              return (
                <option key={department.id} value={department.id}>
                  {department.title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex justify-center gap-[4rem] w-full h-fit mr-auto flex-wrap max-sm:gap-[1rem]">
        {people.map((person: Person) => {
          let alignTop = true;
          if (
            (person.id === 2 && people.length > 2) ||
            (person.id === 5 && people.length > 2)
          ) {
            alignTop = false;
          }
          const departmentName = loaderData.departments.filter((department) => {
            if (department.id === person.departmentId) {
              return department.title;
            }
            return null;
          });

          console.log(departmentName);
          return (
            <TeamMember
              key={person.id}
              person={person}
              alignTop={alignTop}
              departmentName={departmentName[0].title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;

export async function loader(): Promise<{
  departments: Department[];
  people: Person[];
}> {
  const departments = await getDepartments();
  const people = await getPeople();

  return { departments, people };
}

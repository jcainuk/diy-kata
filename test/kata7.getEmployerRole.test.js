const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {

  const employees = [{name: 'Satti', role: 'Developer'},
                     {name: 'Jenny', role: 'Sales Associate'},
                     {name: 'Javid', role: 'Human Recommended Reading Assistant'}]

  it("returns the employee's role in the company", () => {});

  expect(getEmployerRole("Paul", employees)
  ).toEqual("This person is not an employee");

  expect(getEmployerRole("Javid", employees)
  ).toEqual("Human Recommended Reading Assistant");
  expect(getEmployerRole("Javid", employees)
  ).not.toEqual("Sales Associate");


  expect(getEmployerRole("Satti", employees)
  ).toEqual("Developer");
  expect(getEmployerRole("Satti", employees)
  ).not.toEqual("Human Recommended Reading Assistant");

  expect(getEmployerRole("Jenny", employees)
  ).toEqual("Sales Associate");
  expect(getEmployerRole("Jenny", employees)
  ).not.toEqual("Developer");

});
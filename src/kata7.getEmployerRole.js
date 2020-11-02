const getEmployerRole = (employeeName, employees) => {
//Searches an array of objects for employees including name and job role

/* E.G. const employees = [ {name: 'Satti', role: 'Developer'},
                            {name: 'Jenny', role: 'Sales Associate'},
                            {name: 'Javid',role: 'Human Recommended Reading Assistant'}
                            ]; */

    //1. Create a variable employeeFound to store our result (const employeeFound)
    /*2. Use find() on our array parameter (employees) to return the value of the first element in the provided array that satisfies the provided testing function */
    /*3. We iterate through each object (employee) to find the name (employee.name) that matches our original inputted parameter (employeeName) */
    const employeeFound = employees.find(employee => employee.name === employeeName);

    //4. return the individual employee's job role as a string ''
    return employeeFound.role;
  
};

module.exports = getEmployerRole;

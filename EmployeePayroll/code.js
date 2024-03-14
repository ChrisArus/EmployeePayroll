// Function to collect employee data
function collectEmployees() {
    const employees = [];
    let addAnother = true;

    while (addAnother) {
        const firstName = prompt("Enter first name:");
        const lastName = prompt("Enter last name:");
        let salary = prompt("Enter salary:");
        
        // Convert salary to a number, default to 0 if not a valid number
        salary = isNaN(Number(salary)) ? 0 : Number(salary);

        employees.push({ firstName, lastName, salary });

        const continueAdding = confirm("Do you want to add another employee?");
        addAnother = continueAdding;
    }

    return employees;
}

// Function to calculate and display average salary
function displayAverageSalary(employees) {
    const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    const averageSalary = totalSalary / employees.length;
    console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
}

// Function to get a random employee and display their full name
function getRandomEmployee(employees) {
    const randomIndex = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomIndex];
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

// Function to display employees on the page
function displayEmployees(employees) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emp.firstName}</td>
            <td>${emp.lastName}</td>
            <td>$${emp.salary}</td>
        `;
        employeeList.appendChild(row);
    });
}

// Function to handle button click event
function trackEmployeeData() {
    const employees = collectEmployees();
    employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
    displayEmployees(employees);
    displayAverageSalary(employees);
    getRandomEmployee(employees);
}

// Event listener for Add Employee button
document.getElementById('addEmployeeBtn').addEventListener('click', trackEmployeeData);

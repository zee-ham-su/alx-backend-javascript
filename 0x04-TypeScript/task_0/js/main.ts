interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Sufian",
    lastName: "Hamza",
    age: 30,
    location: "Accra",
};

const student2: Student = {
    firstName: "Jalen",
    lastName: "Williams",
    age: 22,
    location: "Oklahoma City",
};

const studentsList = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
table.border = '1';


const headerRow: HTMLTableRowElement = table.createTHead().insertRow(0);
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');
const th3: HTMLTableCellElement = document.createElement('th');
const th4: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Last Name';
th3.innerText = 'Age';
th4.innerText = 'Location';

headerRow.appendChild(th1);
headerRow.appendChild(th2);
headerRow.appendChild(th3);
headerRow.appendChild(th4);


studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow(-1);

    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    const cell3: HTMLTableCellElement = row.insertCell(2);
    const cell4: HTMLTableCellElement = row.insertCell(3);

    cell1.innerText = student.firstName;
    cell2.innerText = student.lastName;
    cell3.innerText = String(student.age);
    cell4.innerText = student.location;
});


document.body.appendChild(table);

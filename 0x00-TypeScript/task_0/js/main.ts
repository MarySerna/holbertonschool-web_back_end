interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Shakira",
    lastName: "Isabel",
    age: 33,
    location: "Barcelona",
  };
  
  const student2: Student = {
    firstName: "Juan",
    lastName: "Esteban",
    age: 44,
    location: "Miami",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const body: HTMLElement = document.body;
  
  const table: HTMLTableElement = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th colspan="2">Students</th>
      </tr>
    </thead>`;
  
  body.appendChild(table);
  
  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  table.appendChild(tbody);
  
  studentsList.forEach(({ firstName, location }: Student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const nameCell: HTMLTableDataCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');
  
    nameCell.textContent = firstName;
    locationCell.textContent = location;
  
    tr.appendChild(nameCell);
    tr.appendChild(locationCell);
  
    tbody.appendChild(tr);
  });
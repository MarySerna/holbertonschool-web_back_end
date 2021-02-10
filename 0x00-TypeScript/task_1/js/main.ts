
// 2. Extending the Teacher class
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    [key: string]: any,
    yearsOfExperience?: number,
  };
  
  // 3. Printing teachers
  interface Directors extends Teacher {
    numberOfReports: number,
  };
  const teacher3: Teacher = {
    firstName: 'Shakira',
    fullTimeEmployee: false,
    lastName: 'Isabel',
    location: 'Barcelona',
    contract: false,
  };
  interface printTeacherFunction {
    printTeacher(a: string, b: string): string;
  };
  const printTeacher = (firstName: string, lastName: string) : string => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  // 4. Writing a class
  interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }
  interface StudentClassInterface {
    firstName: string;
    lastName: string;
  }
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    workOnHomework() {
      return 'Currently working';
    }
    displayName() {
      return this.firstName;
    }
  }
  
  
  console.log(printTeacher("Shakira", "Isabel"));
  console.log(teacher3);
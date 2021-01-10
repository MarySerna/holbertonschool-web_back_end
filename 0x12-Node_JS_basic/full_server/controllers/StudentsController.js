const readDatabase = require('../utils');

class StudentsController {
 static getAllStudents(req, res) {
  readDatabase('database.csv')
    .then((arrayOfClasses) => {
      res.status(200);
      res.write(`Number of students: ${arrayOfClasses.count}\n`);
      for (const cls in arrayOfClasses) {
        if (cls && cls !== 'count') res.write(`Number of students in ${cls}: ${arrayOfClasses[cls].length}. List: ${arrayOfClasses[cls].join(', ')}\n`);
      }
      res.end();
    })
    .catch((err) => { 
      res.status(500);
      throw new Error('Cannot load the database');
    });
 }
}

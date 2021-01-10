const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'GET' && url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (method === 'GET' && url === '/students') {
    countStudents(String(process.argv.slice(2)))
      .then((arrayOfClasses) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${arrayOfClasses.count}\n`);
        for (const cls in arrayOfClasses) {
          if (cls && cls !== 'count') res.write(`Number of students in ${cls}: ${arrayOfClasses[cls].length}. List: ${arrayOfClasses[cls].join(', ')}\n`);
        }
        res.end();
      })
      .catch((err) => { throw err; });
  }
});

app.listen(port);

module.exports = app;

const calculateNumber = (type, a, b) => {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
      break;
    case 'SUBSTRACT':
      return Math.round(a) - Math.round(b);
      break;
    case 'DIVIDE':
      if (Math.round(b) === 0) return 'Error';
      return Math.round(a) / Math.round(b);
      break;
  };
}
module.exports = calculateNumber;

console.log(calculateNumber('SUBSTRACT', 3.1, 2.5), 0);
console.log(calculateNumber('SUBSTRACT', 0.0, 5), -5)
console.log(calculateNumber('SUBSTRACT', -1, 1), -2);
console.log(calculateNumber('SUBSTRACT', -1.5, 0), -2)

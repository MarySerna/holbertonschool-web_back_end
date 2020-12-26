export default function groceriesList() {
  const groceryArray = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const groceryMap = new Map();
  for (const el of groceryArray) groceryMap.set(el[0], el[1]);
  return groceryMap;
}

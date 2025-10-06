const arr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

// Создаем Set для отслеживания уникальных id
const uniqueIds = new Set();

// Фильтруем массив, оставляя только объекты с уникальными id
const uniqueArr = arr.filter(obj => {
  if (!uniqueIds.has(obj.id)) {
    uniqueIds.add(obj.id);
    return true;
  }
  return false;
});

console.log(uniqueArr);
// Результат: [{ id: 1, name: "Вася" }, { id: 2, name: "Петя" }]
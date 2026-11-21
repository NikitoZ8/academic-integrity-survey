const results = Array(12).fill(0);

for (let i = 0; i < 300; i++) {
  const deck = Math.floor(Math.random() * 12) + 1;
  results[deck - 1]++;
}

console.table(
  results.map((count, index) => ({
    "Форма": index + 1,
    "Количество студентов": count
  }))
);

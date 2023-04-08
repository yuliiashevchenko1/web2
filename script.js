//https://knureigs.github.io/itech/lb/ITech1_JS/ITech1_LabJS_meteo_kh.htm

const rows = document.querySelectorAll('table tr:not(:first-child)');

let maxTemp = -25569;
// const rows = document.querySelectorAll('table tr');
// console.log(`Количество строк в таблице: ${rows.length}`);
let hottestDay;

rows.forEach(row => {
  const cells = row.cells;
  const temp = parseFloat(cells[3].textContent);

  if (temp > maxTemp) {
    maxTemp = temp;
    hottestDay = row;
  }
});

const hottestDate = hottestDay.cells[2].textContent;
const hottestTemp = hottestDay.cells[3].textContent;

console.log(`Самый горячий день: ${hottestDate}, температура: ${hottestTemp}°C`);


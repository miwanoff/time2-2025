const week = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
let d = new Date();
// let d = new Date("2025-03-28");
let today = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let dayOfWeek = d.getDay();

let f = new Date(year, month + 1, 1);
//alert(f);
let last = new Date(f - 1);

let lastDate = last.getDate();
console.log(lastDate);

document.writeln(
  `<h2>Сьогодні ${today}.${month + 1}.${year}, ${week[dayOfWeek]}</h2>`
);

let dateOfMon = 1;
if (dayOfWeek != 0) {
  dateOfMon = today - (dayOfWeek - 1);
} else {
  dateOfMon = today - 6;
}
console.log(dateOfMon);

document.writeln("<table>");

document.writeln("<tr>");
for (let i = 0; i < week.length; i++) {
  document.writeln("<th>");
  document.writeln(week[i]);
  document.writeln("</th>");
}
document.writeln("</tr>");

document.writeln("<tr>");
for (let i = 0; i < week.length; i++) {
  document.writeln("<td>");
  document.writeln(`<span class="today">${dateOfMon + i}</span>`);
  document.writeln("</td>");
}
document.writeln("</tr>");

document.writeln("</table>");

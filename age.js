function birthDateToAge(birth) {
  let n = new Date();
  let b = new Date(birth);
  console.log(n.getFullYear());
  console.log(b.getFullYear());
  age = n.getFullYear() - b.getFullYear();
  console.log(age);
  let n_2025 = n.setFullYear(2025); // приводимо дату до 2025року
  let b_2025 = b.setFullYear(2025); //приводимо день рождения до 2025 року
  // якщо дата менше, ніж день народження (дня народження ще не було), віднімаємо 1
  if (n_2025 < b_2025) age -= 1;
  let last = age % 10;
  console.log(last);
  let years = "років";
  if (age < 11 || age > 14) {
    if (last == 1) {
      years = "рік";
    }
    /* доробити для останніх  цифр 2, 3, 4 роки */
  }
  return `${age} ${years}`;
}

alert(birthDateToAge("2014-02-15"));

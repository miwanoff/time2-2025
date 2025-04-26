function birthDateToAge(birth) {
    let n = new Date();
    let b = new Date(birth);
        console.log(n.getFullYear());
        console.log(b.getFullYear());
        age = n.getFullYear() - b.getFullYear();
        let n_2000 = n.setFullYear(2000); // приводимо дату до 2000 року
        let b_2000 = b.setFullYear(2000); //приводимо день рождения до 2000 року        
    // якщо дата менше, ніж день народження (дня народження ще не було), віднімаємо 1
    if (n_2000 < b_2000)
         age -= 1;
     return age;
} 

alert(birthDateToAge("2004-07-15"));

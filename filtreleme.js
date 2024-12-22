function yetiskinleriBul(dizi) {
    return dizi.filter((obj) => obj.age > 18);
  }
  const insanlar = [
    { name: "Onurhan", age: 25 },
    { name: "Whiskey", age: 3 },
    { name: "Ayşe", age: 30 },
    { name: "Ali", age: 17 }
  ];
  
  const yetiskinler = yetiskinleriBul(insanlar);
  console.log(yetiskinler);
  
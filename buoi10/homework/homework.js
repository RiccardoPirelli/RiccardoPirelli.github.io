//
function baiMot(a) {
  return a * 2 * 3.14;
}

console.log(baiMot(3));

//
function baiHai(a) {
  return a * a * 3.14;
}

console.log(baiHai(5));

//
function baiBa(a) {
  return a / 100;
}

console.log(baiBa(2000));

//
function baiBon(a) {
  return a / 60;
}

console.log(baiBon(5));

//
function baiNam(a, b, c) {
  return (c - b) / a;
}

console.log(baiNam(5, 7, 10));

//
function baiSau(c) {
  return c * 1.8 + 32;
}

console.log(baiSau(21));

//
function baiBay(kg, m) {
  return kg / (m * m);
}

console.log(baiBay(74, 1.76));

//
function baiTam(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(baiTam(20, 2021));

// Function ko co tham so

function sayHello() {
  console.log("xin chao cac ban");
}

sayHello();
sayHello();
sayHello();
sayHello();

// Function co mot tham so
// In ra dong chu xin chao ai do

function sayHello1(name) {
  console.log("xin chao ban " + name);
}

sayHello1("Nguyen van a");
sayHello1("tran van b");
sayHello1("Nguyen thi c");

function sayHello2(name, year) {
  console.log("Ten: ", name);
  console.log("Tuoi: ", 2021 - year);
}

sayHello2("ngo van B", 1997);
sayHello2("nguyen van C", 2000);
sayHello2();

//ES6 : Default Parameter

function sayHello3(name = "Nguyen Van A", year = 2006) {
  console.log("Ten: ", name);
  console.log("Tuoi: ", 2021 - year);
}

sayHello3("ngo van be");

// Function tra ve ket qua

function sum(a = 10, b = 20) {
  let result = a + b;
  return result;
}

let data = sum(3, 4);
console.log(data);

function printNumber(number) {
  console.log(number);
}

let data1 = sum(5, 5);
printNumber(data1);

printNumber(sum());
printNumber(sum(5));

// Bai tap thuc hanh

function helloEveryone() {
  console.log("Xin chao cac ban");
}

helloEveryone();

function helloEveryone1(name) {
  console.log("Xin chao " + name);
}

helloEveryone1("X");

function helloEveryone2(name) {
  console.log(`Xin chao "${name}" nam nay ${2021-1997} tuoi`);
}

helloEveryone2("Dang Vu Hiep");

function multiple(a) {
  return a ** 2;
}

console.log(multiple(5));



//2021 =>21
//1999 =>21
function findCentury(year) {
    return Math.ceil(year / 100);
}

console.log(findCentury(2021));
console.log(findCentury(2077))

function tinhTong(a, b) {
  return a + b;
}

console.log(tinhTong(5, 4));

// Lam tron: Math.floot(), Math.round(), Math.ceil()

//Math.floor: lam tron xuong
//Math.ceil: lam tron len
//Math.round: lam tron bthg


//Cau dien kien If


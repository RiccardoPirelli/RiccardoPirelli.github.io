let a = 5;
console.log(Boolean(a));
console.log(Boolean(0));

console.log(Boolean("abc"));
console.log(Boolean(""));

console.log(Boolean(5 > 4));
console.log(Boolean(5 < 4));

console.log("-------");
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));

//Toan tu logic
//Toan tu ||
console.log("Toan tu ||");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//Toan tu &&
console.log("Toan tu &&");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Cau dieu kien If Else
let hour = 24;
if (hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour <= 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}

//Bai tap thuc hanh

//Bai1
function mark(a) {
  if (a >= 85) {
    console.log("A");
  } else if (a >= 70 && a < 85) {
    console.log("B");
  } else if (a >= 40 && a < 70) {
    console.log("C");
  } else {
    console.log("D");
  }
}

mark(42);

//Bai2
function soLonhon(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

soLonhon(3, 5);

//Bai3
function test(a) {
  if (a > 0) {
    console.log("So duong");
  } else if (a < 0) {
    console.log("So am");
  } else {
    console.log("sokhong");
  }
}

test(-3);

//Bai4

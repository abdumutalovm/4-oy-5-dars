// ex-0 : 1 dan 100 gacha bo'lgan sonlarni ekranga chiqaruvchi algoritm yozing.
// let number;
// for (number = 1; number <= 100; number++) {
//   console.log(number);
// }

// ex-1 : 1dan n gacha bolgan sonlarni ekranga chiqaruvchi dastur yozing.
// let n = prompt("Enter the number");
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// ex-2 : 1dan n gacha sonlar yigindisini hisoblovchi algoritm yozing.
// let n = +prompt("Enterr the number");
// let sum = 0;
// for (var i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// ex-3 : 1dan n gacha barcha toq sonlar yigindisini topuvchi algoritm yozing.
// let n = +prompt("Enter the number");
// let anOddNumber = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     anOddNumber = anOddNumber + i;
//   }
// }
// console.log(anOddNumber);

// ex-4 : a dan b gacha barcha juft sonlar kopaytmasini topuvchi algortim yozing.
// let a = 10;
// let b = 20;
// let sum = 1;
// for (let i = a; i <= b; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum = sum * i;
//   }
// }
// console.log("Juft sonlar kopaytmasi " + sum + " ga teng");

// ex-5 : a dan b gacha bolgan barcha 3ga hamda 5ga karrali sonlar yigindisini topuvchi algoritm yozing.
// let a = 10;
// let b = 30;
// let count = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//     sum = sum + i;
//   }
// }
// console.log("3ga hamda 5ga karrali son: " + sum);

// ex-6 : Berilgan sonning bo'luvchilar sonini topuvchi algoritm yozing.
// let num = 150; // Bu yerda sizning soningiz
// let count = 0;
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     count++;
//   }
// }

// console.log("Bolinuvchilar soni: " + count + " ta");

// ex-7 : Berilgan sonning tub yoki tub emasligini aniqlovchi algoritm yozing.
// let son = +prompt("Enter the number");
// let tubSon = true;

// for (let i = 2; i < son; i++) {
//   if (son % i == 0) {
//     tubSon = false;
//   }
// }

// if (tubSon) {
//   console.log(son + " tub son");
// } else {
//   console.log(son + " tub son emas");
// }

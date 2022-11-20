//Написать ф-ию, удаляющую из стоки все числа
//
// let str = "hello 1 2 worl3d";
//
// console.log(str.replace(/\d/g, ""));

let num = "+881891111  1- 00  49";

console.log(num.replace(/\D/g, "").replace(/(\d+)(\d{3})(\d{2})(\d{2})$/g, "$1-$2-$3-$4"));

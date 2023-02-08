// Arrayda text icindeki sozlerin ilk herfini boyuk cixartsin

// let arr = ["hello", "how", "are", "your"];

// function changeFirstLetter(arr) {
//   let reserved = [];
//   for (let i = 0; i < arr.length; i++) {
//     let word = "";
//     for (let k = 0; k < arr[i].length; k++) {
//       if (k == 0) {
//         word += arr[i][k].toUpperCase();
//       } else {
//         word += arr[i][k];
//       }
//     }
//     reserved.push(word);
//   }

//   return reserved;
// }

// console.log(changeFirstLetter(arr));

// Arrayda stringlerin ilk stiringi boyuke cevir

// let arr = ["hello", "how", "are", "your"];
// arr[0] = arr[0].toUpperCase();
// console.log(arr);

// Arrayda stringlerin son herfini boyuke cevirin

// let arr = ["hello", "how", "are", "your"];

// const changeLastLetter = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let word = "";

//     for (let k = 0; k < arr[i].length; k++) {
//       if (k == arr[i].length - 1) {
//         word += arr[i][k].toUpperCase();
//       } else {
//         word += arr[i][k];
//       }
//     }
//     arr[i] = word;
//   }

//   return arr;
// };

// console.log(changeLastLetter(arr))

// Arrayde ededleri tersine cevirmek

// let arr = [123, 5435, 56456];

// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]),
//     reservedNum = "";

//   for (let k = num.length - 1; k >= 0; k--) {
//     reservedNum += num[k];
//   }
//   console.log(reservedNum);
// }

// Arrayda her iki ededden bir iki eded arasinda reqemlerin cemi

// let arr = [1, 2, 4, 6, 8, 9];

// for (let i = 0; i < arr.length; i += 2) {
//   total = 0;

//   for (let k = arr[i] + 1; k < arr[i + 1]; k++) {
//     total += k;
//   }

//   console.log(total);
// }

// Qarışıq array verilib, yalnızca ədədləri çap etdirin.

// let arr = ["hello", "how", "are", 123, "you", 96];

// for (let i = 0; i < arr.length; i++) {
//   if (!isNaN(Number(arr[i]))) {
//     console.log(arr[i]);
//   }
// }

// Qarışıq array verilib, yalnızca stringləri çap etdirin.

// let arr = ["hello", "how", "are", 123, "you", 96];

// for (let i = 0; i < arr.length; i++) {
//   if (isNaN(Number(arr[i]))) {
//     console.log(arr[i]);
//   }
// }

// Arrayda metodlar (en azi 3 method ile edilsin) ile ededleri 5 vahid artirmaq

// let arr = [123, 435345, 8080];

// // for (let i = 0; i < arr.length; i++) {
// //   arr[i] = arr[i] + 5;
// // }

// let newArr = arr.map((element) => (element = element + 5));

// console.log(newArr);

// Input ile daxil olunan stringler icerisindeki saitlerin sayini tapin

// let arr = prompt('Enter words: ","'),
//   wovels = ["a", "e", "i", "u", "ı", "o", "ə", "ö", "ü"];

// let counter = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let k = 0; k < arr[i].length; k++) {
//     if (wovels.includes(arr[i][k])) {
//       counter++;
//     }
//   }
// }

// console.log(counter);

// Array icerisindeki ən böyük ən kiçik ədədin tapılması

// let arr = [123, 43, 63,1, 66, 234, 12];

// function findSmallest(arr) {
//   let smallest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }

//   return smallest;
// }


// console.log(findSmallest(arr))


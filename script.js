
// დავალება №1

// let array = [5, 25, 89, 120, 36];

// array.push ('javascript', 'python');
// array.unshift ('html', 'css');

// console.log (array);

// console.log (array.length);

// array.shift ();
// array.pop ();

// console.log (array);

// დავალება №2

// let fruits = ["ფორთოხალი", "ბანანი", "მსხალი"];
// console.log(fruits.length);

// fruits.push("ვაშლი", "ანანასი");
// fruits.unshift("საზამთრო");
// console.log(fruits.length);

// fruits.splice(2, 0, 'მანგო');
// fruits.shift();
// fruits.pop();
// console.log(fruits.length);

// დავალება №3

// let num = [12,25,3,6,8,14,7,23];
// let devide = num.map(function(x){
//     return x/3;
// }
// )

// console.log(devide);

// დავალება №4

// let array = ['hello',125, 'javascript', 'html', 43, 'css', 'scss','bootstrap', 88, 59, 'python'];

// let numbers = array.filter (
//     element => typeof element === 'number'
//   );
//   console.log(numbers);

// დავალება №5

// let languages = [ 'html', 'css', 'javascript', 'python', 'php'];

// let lang = languages.filter(function(symbols) {
//   return symbols.length>3;
// }
// );

//  console.log(lang); 

// დავალება № 6

// let array = [ 'academy', 'of', 'digital', 'industries'];

// let word = [ 'academy', 'of', 'digital', 'industries'].reduce((combine, currentValue) => combine.concat(currentValue)

// );

// console.log(word);

// დავალება №7

// let item = [12, 'google', 32, null, 'yahoo', 25]

// let result = item.map(item => {
//     if(typeof item == 'number') {
//         return item * item;
//     }
//     else if(typeof item == 'string') {
//         return item.toUpperCase();
//     }
//     return item;
// })

// console.log(result);

// დაბალება №8

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let result = words.filter(element => {
//     if(element.includes('m') || element.includes('M')) {
//         return true;
//     }
//     return false;
// })
//     console.log(result);


// დავალება №9

// let arr1=[1,2];
// let arr2=[3,4];
// let arr3=[5,6];

// let array = arr1.concat(arr2,arr3);

// console.log(array);

// დავალება №10

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
//   arr.forEach(item => {
//     sum += item;
//   });
//   console.log(sum);

// დავალება №11

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let posNum = numbers.filter(x => x > 0);

// console.log(posNum);

// დავალება №12

// let arr = [-1, -2, -3, 4];

// let check = arr.some(function(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(check);

// დავალება №13

// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

// let arrayUnit = [[2,-3,5,11],[1,-30,-11,100],[-1,-3,-4]].reduce(function(accumulate, currentValue) {
//     return accumulate.concat(currentValue);
// }

// );
// let Pos = arrayUnit.filter(y => y > 0);

// console.log(Pos);

// დავალება №14

// let array = [23,45,32,5,87,7,3,98];

// let result = array.sort((a,b) => (b-a));

// console.log(result);

// console.log(result[array.length-1]);




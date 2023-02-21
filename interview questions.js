//1
// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);
// reason:- memory location of two arrays never be same so output false

//2
// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);
//memory location of two arrays is same so output is true

//3
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);
//element value of two arrays is compared so output is true

//4
// let z = [1, 2, 3, 4, 7];
// let a = { name: "anil" }; not necessarily
// console.log(...z);
//

//5
// console.log(typeof NaN);
// output:-Number
//note a number

//6
// let data = 10- -10;
// console.log(data);
//- and - becomes + output is 20

//7
// const set = new Set([1, 1, 2, 3, 4, 5]);
// console.log(set);
//set always remove duplicate numbers

//8
// let data = { name: 'Rupesh' };
// console.log(delete data.name);
//when delete property is add with output, then output is true

//9
// let data = { name: "Rupesh" };
// console.log(delete data);
//assign variables could not delete but properties in variables it can delete then output is false

//10
// const data = ['mango', 'orange', 'cherry', 'guava'];
// const [y] = data;
// console.log(y);
//output is mango because y stores a parameter of mango if we want to print 2nd fruit the we can assign another variable to print next fruit

//11
//  const data = ['mango', 'orange', 'cherry', 'guava'];
//  const [,y] = data;
//  console.log(y);
//output is orange

//12
//print data without using operator
// const data = { name: "Rupesh", age: 27, blood: "o neg" };
// const { blood } = data;
// console.log(blood);

//13
// merge 2 Objects
// let data = { name: "Rupesh", age: 27, blood: "o neg" };
// let info = { skill: 'Python', email: 'rupesh@gmail.com' }
// data = { ...data, ...info }
// console.log(data)

//14
// let data = { name: "Rupesh", age: 27, blood: "o neg" };
// let info = { skill: "Python", email: "rupesh@gmail.com" };
// data = { data, ...info };
// console.log(data);

//15
// let data = { name: "Rupesh", age: 27, blood: "o neg", skill: "python" };
// let info = { skill: "Python", email: "rupesh@gmail.com" };
// data = { ...data, ...info };
// console.log(data);

//16
// let name="Rupesh";
// console.log(name());
//name is not function so error is occurred

//17
// const result = false || {} || null;
// console.log(result);
//output is object

//18
// const result = null || false || "";
// console.log(result);
//output is empty string because variable is always +ve value if variable has not find a positive value then variable pick a last value weather its true or false

//19
// const result = [] || 0|| true;
// console.log(result);
//array is positive so output is positive

//20
console.log(Promise.resolve(5))

//21
console.log();



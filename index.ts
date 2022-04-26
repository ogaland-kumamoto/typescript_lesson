let hasValue = true;
let count = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// オブジェクトに型をつける方法
const person:  {
    name: string;
    age: number;
} = {
    name: 'John',
    age: 30
}

console.log(person.name);

// // let hello: string = 'hello';
// // console.log(hello);

// function add(a: string, b: number): number {
//     return a + b;
// }
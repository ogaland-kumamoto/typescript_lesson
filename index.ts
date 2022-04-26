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

// 配列に方を付けるAarry型はこう使う
const fruits: string[] = ['apple', 'orange', 'banana'];
const fruit = fruits[0];
// fruits.push(21);

// Tuple型を使用して、決まった内容の配列を作る方法
const book: [string,number, boolean] = ['business', 1500, false]
book.push('hello');

// Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
// 列挙された特定のまとまったグループのみを受け入れる
enum CoffeeSize {
    SHORT= 'SHORT',
    TALL= 'TALL',
    GRANDE= 'GRANDE',
    VENTI= 'VENTI'
}

const coffee = {
    hot:true,
    size:CoffeeSize.TALL
}

console.log(person.name);

// // let hello: string = 'hello';
// // console.log(hello);

// function add(a: string, b: number): number {
//     return a + b;
// }
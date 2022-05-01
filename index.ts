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

// 20. どんな型にもなるany型について知る
// any型は、型を指定せずに、どんな型でも代入できる。
// any型はなるべく使わないようにする。
let anything: any = true;
anything = 'hello';
anything = ['hello', 33,true];
anything = {};
anything.myName = 'John';
let banana = 'banana';
banana = anything;

// 21. Union型を使って複数の型 を使う方法
let unionType: number | String = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();

let unionTypes: (number | string)[] = [21, 'hello'];

// 22. Literal型を使って特定の値のみを取り扱う方法
const apple: 'apple' = 'apple';
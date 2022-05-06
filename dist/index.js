"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
// 16. オブジェクトに型を付ける方法
const person = {
    name: 'John',
    age: 30
};
// 17. 配列に型を付けるArray型はこう使う
const fruits = ['apple', 'orange', 'banana'];
const fruit = fruits[0];
// fruits.push(21);
// 18. Tuple型を使用して、決まった内容の配列を作る方法
const book = ['business', 1500, false];
book.push('hello');
// 19. Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
// 列挙された特定のまとまったグループのみを受け入れる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
console.log(person.name);
// // let hello: string = 'hello';
// // console.log(hello);
// function add(a: string, b: number): number {
//     return a + b;
// }
// 20. どんな型にもなるany型について知る
// any型は、型を指定せずに、どんな型でも代入できる。
// any型はなるべく使わないようにする。
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.myName = 'John';
let banana = 'banana';
banana = anything;
// 21. Union型を使って複数の型 を使う方法
let unionType = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
let unionTypes = [21, 'hello'];
// 22. Literal型を使って特定の値のみを取り扱う方法
const apple = 'apple';
let clothSize = 'large';
const cloth = {
    color: 'red',
    size1: 'small',
    // size2: 'medium'
};
// 24. 関数に型を適応させる方法
function add(a, b) {
    return a + b;
}
add(2, 4);
// 25. 関数の戻り値にvoid型を使う方法
function sayHello() {
    console.log('hello');
}
// 26. undefined型とnull型についての補足
let tmp;
// let tmpNull: null = undefined;
// 27. 関数型を使って、特定の関数のみを代入できる変数を作る
const anotherAdd1 = add;
const anotherAdd2 = function (a, b) {
    return a + b;
};
const doubleNumber = num => num * 2;
// 28. callback関数の型はこう書く
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
// 29. unknown型を使って、柔軟でanyよりも厳しい型を定義する方法
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 11;
unknownInput = true;
text = anyInput;
if (typeof unknownInput == 'string') {
    text = unknownInput;
}
// 30. never型を使って、起こり得ない値の型を使用する方法
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
// 33. watchモードを使って、保存時に自動的にTSからJSにコンパイルする方法
// const= 'hello';

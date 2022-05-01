var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
// オブジェクトに型をつける方法
var person = {
    name: 'John',
    age: 30
};
// 配列に方を付けるAarry型はこう使う
var fruits = ['apple', 'orange', 'banana'];
var fruit = fruits[0];
// fruits.push(21);
// Tuple型を使用して、決まった内容の配列を作る方法
var book = ['business', 1500, false];
book.push('hello');
// Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
// 列挙された特定のまとまったグループのみを受け入れる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
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
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.myName = 'John';
var banana = 'banana';
banana = anything;
// 21. Union型を使って複数の型 を使う方法
var unionType = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
var unionTypes = [21, 'hello'];

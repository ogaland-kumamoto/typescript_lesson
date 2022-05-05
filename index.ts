let hasValue = true;
let count = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// 16. オブジェクトに型を付ける方法
const person:  {
    name: string;
    age: number;
} = {
    name: 'John',
    age: 30
}

// 17. 配列に型を付けるArray型はこう使う
const fruits: string[] = ['apple', 'orange', 'banana'];
const fruit = fruits[0];
// fruits.push(21);

// 18. Tuple型を使用して、決まった内容の配列を作る方法
const book: [string,number, boolean] = ['business', 1500, false]
book.push('hello');

// 19. Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
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

let clothSize: 'small' | 'medium' | 'large' = 'large';

const cloth: {
    color: string;
    size1: 'small' | 'medium' | 'large';
    // size2: ClothSize;   //typeエイリアス
} = {
    color: 'red',
    size1: 'small',
    // size2: 'medium'
}

// 23. typeエイリアスを使って複雑な型を変数のように扱う
type ClothSize = 'small' | 'medium' | 'large';

// 24. 関数に型を適応させる方法
function add(a: number, b: number): number {
    return a + b;
}
add(2,4);

// 25. 関数の戻り値にvoid型を使う方法
function sayHello(): void {
    console.log('hello');
}

// 26. undefined型とnull型についての補足
let tmp: undefined;
// let tmpNull: null = undefined;

// 27. 関数型を使って、特定の関数のみを代入できる変数を作る
const anotherAdd1: (n1: number, n2: number) => number = add;
const anotherAdd2: (n1: number, n2: number) => number = function (a: number, b: number){
    return a + b;
}
const doubleNumber: (num: number) => number = num => num * 2;

// 28. callback関数の型はこう書く
function doubleAndHandle(num: number,cb:(num: number)=>number): void {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21,doubleNum => {
    return doubleNum;
});

// 29. unknown型を使って、柔軟でanyよりも厳しい型を定義する方法
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 11;
unknownInput = true;
text = anyInput;
if(typeof unknownInput  == 'string') {
    text = unknownInput;
}

// 30. never型を使って、起こり得ない値の型を使用する方法
function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is an error'));

// 33. watchモードを使って、保存時に自動的にTSからJSにコンパイルする方法
// const= 'hello';
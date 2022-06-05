// 68. interfaceで関数の型を表現する方法
// type addFunc = (num1: number, num2: number) => number;
// ↓も同じ
interface addFunc {
  (n1: number, n2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

// 67. extendsを使ってinterfaceを継承する方法
// 69. ?を使って、あってもなくても良いオプショナルプロパティとオプショナルパラメーターを使用する方法
type Nameable = {
  name: string;
  nickName?: string;
};

const nameable: Nameable = {
  name: 'Quill',
  nickName: 'Quill',
};

// 62. interfaceはこう使う！
interface Human extends Nameable {
  // 66. readonly修飾子をinterfaceに使って読むだけのプロパティを作る方法
  readonly name: string;
  age: number;
  // 63. メソッドをオブジェクトの型に指定する方法
  greeting(message: string): void;
}

// const human: Human = {
//     name : 'taro',
//     age : 20,
//     // 63. メソッドをオブジェクトの型に指定する方法
//     greeting(message: string){
//         console.log(message);
//     }
// }
// let developer: Human;

//  64. implementsを使用して、クラスに対してinterfaceの条件を適応させる方法
class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number
  ) {}
  greeting(message: string) {
    console.log('message');
  }
}

// 65. これがTypeScriptの構造的部分型だ！
const tmpDeveloper = {
  name: 'taro',
  age: 20,
  experience: 1,
  greeting(message: string) {
    console.log(message);
  },
};

const user: Human = new Developer('taro', 20, 5);

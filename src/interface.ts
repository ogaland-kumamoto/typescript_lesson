// 62. interfaceはこう使う！
interface  Human {
    name: string;
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
    constructor(public name: string, public age: number){};
        greeting(message: string) {
        console.log('message');
    }

}
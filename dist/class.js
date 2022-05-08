// 47. classを定義してオブジェクトを作成する方法
// 48. JSにコンパイルされたclassはこうなっている
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    // 50. クラスを型として使う方法
    // greeting(this:{name : string}){
    //     console.log(`Hello, my name is ${this.name}`);
    // }
    // 51. public修飾子とprivate修飾子を使用して、アクセスを制限する方法
    incrementAge() {
        this.age += 1;
    }
    // 49. クラスにメソッドを追加する方法
    // 50. クラスを型として使う方法
    greeting() {
        console.log(`Hello, my name is ${this.name}.I am ${this.age} years old`);
    }
}
let person2;
const quill = new Person('Quill', 38);
quill.greeting();
// console.log(quill.age);
quill.incrementAge();
// console.log(Person.name);
// const anotherQuill = {
//     name: 'Quill',
//     anotherGreeting: quill.greeting
// }
// anotherQuill.anotherGreeting();

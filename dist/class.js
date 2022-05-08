// 47. classを定義してオブジェクトを作成する方法
// 48. JSにコンパイルされたclassはこうなっている
class Person {
    // public name: String;
    // 51. public修飾子とprivate修飾子を使用して、アクセスを制限する方法
    // private age: number;
    // constructor(initName: String , initAge: number){}
    // 52. 初期化の処理を省略する方法
    // constructor(public name: String , private age: number){
    //     this.name = initName;
    //     this.age = initAge;
    // }
    // 53. readonly修飾子を使って、書き換え出来ないようにする方法
    // constructor(public name: String , private readonly age: number){
    // }
    // 50. クラスを型として使う方法
    // greeting(this:{name : string}){
    //     console.log(`Hello, my name is ${this.name}`);
    // }
    // 51. public修飾子とprivate修飾子を使用して、アクセスを制限する方法
    //  privateをconstructorに付けて、シングルトンパターンを実装する方法
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    // 49. クラスにメソッドを追加する方法
    // 50. クラスを型として使う方法
    greeting() {
        console.log(`Hello, my name is ${this.name}.I am ${this.age} years old`);
    }
}
// staticを使用して、インスタンスを作らずにクラスを使う方法
Person.species = 'HOMO SAPIENS';
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
// 54. extendsを使用して、他のクラスの機能を継承する方法
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    get subject() {
        return 'Music';
    }
    set subject(value) {
        this.subject = value;
    }
    greeting() {
        console.log(`Hello, my name is ${this.name}.I am ${this.age} years old.I teach ${this.subject}`);
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
Math.PI;
console.log(Person.species);

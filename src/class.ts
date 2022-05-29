// 47. classを定義してオブジェクトを作成する方法
// 48. JSにコンパイルされたclassはこうなっている

abstract class Person{
    // staticを使用して、インスタンスを作らずにクラスを使う方法
    static species = 'HOMO SAPIENS'
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
    private constructor(public name: String , protected age: number){
    }
    incrementAge(){
        this.age += 1;
    }

    // 49. クラスにメソッドを追加する方法
    // 50. クラスを型として使う方法

    greeting(this:Person){
        console.log(`Hello, my name is ${this.name}.I am ${this.age} years old`);
    }
    // Abstractクラスを使用して、継承にのみ使えるクラスを作成する方法
    // abstract explainjob():void;
}
let person2: Person;
// const quill = new Person('Quill', 38);
// quill.greeting();
// // console.log(quill.age);
// quill.incrementAge();

// console.log(Person.name);
// const anotherQuill = {
//     name: 'Quill',
//     anotherGreeting: quill.greeting
// }
// anotherQuill.anotherGreeting();


// 54. extendsを使用して、他のクラスの機能を継承する方法
// class Teacher extends Person{
//     get subject(){
//         return 'Music';
//     }
//     set subject(value){
//         this.subject = value;
//     }
//     constructor(name: String , age: number , public subject: string){
//         super(name, age);
//     }
//     greeting(this: Person){
//         console.log(`Hello, my name is ${this.name}.I am ${this.age} years old.I teach ${this.subject}`);
//     }
// }

// const teacher = new Teacher('Quill', 38, 'Math');

Math.PI;
console.log(Person.species);



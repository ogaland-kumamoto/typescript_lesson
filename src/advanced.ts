// 72. AかつBのように、&を用いてインターセクション型を定義する方法

type Engineer = {
    name: string;
    role : string
}

type Blogger= {
    name: string;
    followers: number;
}
type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger{}   //このやり方もできる

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'frontend',
    followers: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 73. 条件文を使って型を絞り込む、３つのType guard
function toUpperCase(x:string | number ){
    if (typeof x === 'string'){
        x.toUpperCase();
        return x.toUpperCase();
    }else{
        return '';
    }


type NomadWorker = Engineer | Blogger;
function describeNomadWorkerProfile(nomadWorker: NomadWorker){
    console.log(nomadWorker.name);
    // if (typeof nomadWorker === 'object'){
    //     console.log(nomadWorker.name);
    // }
    if ('role' in nomadWorker){
        console.log(nomadWorker.role);
    }
    if ('followers' in nomadWorker){
        console.log(nomadWorker.followers);
    }
}
}
class Dog {
    kind : 'dog' = 'dog';
    speak() {
        console.log('woof');
    }
}
class Bird {
    kind : 'bird' = 'bird';
    speak() {
        console.log('tweet');
    }
    fly() {
        console.log('flutter');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet){
    pet.speak();
    switch (pet.kind){
        case 'dog':
            console.log('bark');
            break;
        case 'bird':
            pet.fly();
    }

    if (pet instanceof Bird){
        pet.fly();
    }
}
// 75. 型アサーションを使って、手動で型を上書きする方法
// const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input') as HTMLInputElement;
// (<HTMLInputElement>document.getElementById('input')).value = 'hi';
input.value = 'hello';

// 76. !(Non-null assertion operator)を使って、nullじゃないと言い切る方法 (上下は同じ)
const input2 = document.getElementById('input') as HTMLInputElement;
const input3 = document.getElementById('input')!;
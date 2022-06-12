// 104. デコレータを使ってClassに関数を適応する方法
// 105. デコレータファクトリを使用して、デコレータに引数を渡す方法
// function Logging(constructor: Function) {
//     console.log('Logging');
//     console.log(constructor);
// }
function Logging(message: string) {
    return function (constuructor: Function) {
        console.log('Logging');
        console.log(constuructor);
    }
}

// 106. こうしてデコレータを使って簡易版のフレームワークを作成する
function Component(template:string, selector:string) {
    console.log('Components Factory');
    return function (constructor: { new(...args:any[]): {name:string} }) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if(mountedElement){
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1')!.textContent = constructor.name;
        }
    }
}

// @Logging
@Logging('Logging user')
@Component('<h1>{{name}}</h1>' ,'#app')
class User {
    name = 'Quill';
    constructor(){
        console.log('User created');
    }
}
const user1 = new User();
const user2 = new User();
const user3 = new User();

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
console.dir(Logging)
// 106. こうしてデコレータを使って簡易版のフレームワークを作成する
function Component(template:string, selector:string) {
    console.log('Components Factory');
    // return function (constructor: { new(...args:any[]): {name:string} ) {
    return function <T extends { new(...args:any[]): {name:string}}>(constructor: T)  {
        // 107. 戻り値にクラスを指定して、新しいクラスを作り出す方法
        return class extends constructor{
            constructor(...args:any[]){
                super(...args);
                console.log('Component');
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if(mountedElement){
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1')!.textContent = constructor.name;
                }
            }
        }
    }
}
// 109. 「プロパティーデコレータを使う方法」と「prototypeについて」
//JavaScriptはFunctionもオブジェクト 
function PropertyLogging(target:any, propertyKey:string) {
    console.log('propertyLogging')
    console.log('target')
    console.log('propertyKey')
}

function MethodLogging(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
    console.log('methodLogging')
    console.log('target')
    console.log('propertyKey')
    console.log('description')
}
// 112. 戻り値を使って、実践的なメソッドデコレータを使う方法
function enumerable(isEnumerable: boolean) {
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor){
        return {
            enumerable: isEnumerable
        }
    }
}
// 111. アクセサーデコレータはこう使う
function AccessorLogging(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
    console.log('AccessorLogging')
    console.log('target')
    console.log('propertyKey')
    console.log('description')
}
// 113. パラメータデコレータはこう使う
function ParameterLogging(target:any, propertyKey:string, parameterIndex: number) {
    console.log('ParameterLogging')
    console.log('target')
    console.log('propertyKey')
    console.log('parameterIndex')
}
// @Logging
// デコレーターは下から上に実行される。


// @Logging
// デコレーターは下から上に実行される。
@Logging('Logging user')
@Component('<h1>{{name}}</h1>' ,'#app')
class User {
    name = 'Quill';
    constructor(public _age:number){
        console.log('User created');
    }
    @AccessorLogging
    get age(){
        return this._age
    }
    set age(value){
        this._age = value;
    }
    @enumerable(false)
    @MethodLogging
    greeting(@ParameterLogging message: string){
        console.log(message)
    }
}
const user1 = new User(32);
const user2 = new User(32);
const user3 = new User(32);

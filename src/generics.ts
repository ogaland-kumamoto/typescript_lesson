
// 101. 型のif文であるConditional Typesはこう使う
type ConditionalTypes = string extends 'tomato' ? number : boolean
type ConditionalTypesInfer = {tomato: 'tomato'} extends {tomato:infer R} ? R : boolean;
type DistributiveConditionalTypes<T> = ('tomato' | 'pumpkin') extends 'tomato' ? number : boolean;
let tmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>;
let tmp5: NonNullable<string | null>;

// 93. こうしてジェネリクスを使って、型を引数として受け取る
// 参照先の使われ方を型推論して、パラメーターTとUの型を勝手に推論している。やべえ。
// function copy<T>(value: T):T  {
//     return value;
// }
// console.log(copy<string>('hello'));
// console.log(copy({name: 'Quill'}) as {name:string } )


// 94. extendsを使って型パラメータに制約をつける方法
// クラスのインプリメンツに似ている
function copy<T extends {name : string }, U extends keyof T>(value: T, key:U):T  {
    value[key];
    return value;
}
console.log(copy({name :'Quill',age:38},'name'));
// 95. keyofを使ってオブジェクトのキーのユニオン型を作成する方法
type K = keyof {name: string; age: number};

// 96. Classに対してジェネリクスを使用する方法
class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T){
        this.data.push(item);
    }
    remove(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }
    get(){
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');

// 97. Interfaceに対してジェネリクスを使用する方法
interface TmpDatabase<T>{
    id:number;
    data:T[];
}
const tmpDatabase: TmpDatabase<number> = {
    id: 1,
    data: [1,2,3]
}
// 98. 内蔵されているジェネリック型であるUtility型の紹介
interface Todo{
    title:string;
    text:string;
}
// 他にもいろいろある
type Todoble = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('Hello World');
    }, 1000);
});

fetchData.then(data => {
    data.toUpperCase();
});

// const vegetables:string[] = ['Carrot', 'Potato', 'Cucumber'];
// ↑↓同じ意味
const vegetables:Array<string> = ['Carrot', 'Potato', 'Cucumber'];

// 99. デフォルトの型パラメーターを指定する方法
interface RsponseData<T extends{ message:string } = any>{
    data: T;
    status:number;
}

let tmp2:RsponseData;

// 100. 型のfor文であるMapped Typesはこう使う
interface Vegetables{
    readonly tomato:string;
    pumpkin:string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
    -readonly [P in keyof 'tomato' | 'onion' ]-?: string;
}


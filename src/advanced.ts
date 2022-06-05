// 72. AかつBのように、&を用いてインターセクション型を定義する方法

type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  followers: number;
};
type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger{}   //このやり方もできる

const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'frontend',

  followers: 1000,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 73. 条件文を使って型を絞り込む、３つのType guard
// 78. 関数のオーバーロードを使って、戻り値の型を正しくTypeScriptに伝える方法
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    x.toUpperCase();
    return x.toUpperCase();
  } else {
    return '';
  }
  const upperHello = toUpperCase('hello');


  type NomadWorker = Engineer | Blogger;
  function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    // if (typeof nomadWorker === 'object'){
    //     console.log(nomadWorker.name);
    // }
    if ('role' in nomadWorker) {
      console.log(nomadWorker.role);
    }
    if ('followers' in nomadWorker) {
      console.log(nomadWorker.followers);
    }
  }
}
class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('woof');
  }
}
class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case 'dog':
      console.log('bark');
      break;
    case 'bird':
      pet.fly();
  }

  if (pet instanceof Bird) {
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

// 77. インデックスシグネチャを使用して柔軟なオブジェクトを作る方法
interface Designer {
  name: string;
  [index: string]:string;
}
const designer2: Designer = {
  name: 'Quill',
  role: 'frontend'
}
console.log(designer2.name)

// 79. Optional Chainingはこう使う！
interface DownloadedData{
  id: number;
  user?:{
    name?: string;
      first: string;
      last: string;
  }
}

const downloadedData: DownloadedData = {
  id: 1,
};
console.log(downloadedData.user?.name?.first);

// 80. Nullish Coalescingはこう使う！
// undefined nullだったら返す値
const userData = downloadedData.user ?? 'no-user';

// 81. LookUp型を使ってオブジェクトのメンバーの型を取得する方法
type id = DownloadedData["id"];
type name = DownloadedData["user"]["name"];
type id2 = DownloadedData["id" | "user"];


// 82. 型の互換性の仕様書はこうなっている！
enum Color {
  RED,
  BLUE,
}
let target: string = 'hello';
let source: 'hello' = 'hello';
// 左側の変数の型が正しい場合にのみ怒られない
target = source;
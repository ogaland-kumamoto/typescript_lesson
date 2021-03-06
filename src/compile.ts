// 34. tsc —initでtsconfig.jsonを作り、全てのファイルを一気にコンパイルする方法
// console.log('compile');

// 37. libを指定して、TypeScriptが用意している型の定義を追加する
let hello = 'hello';
console.log(hello.toUpperCase());

// 42. noImplicitAnyやstrictNullChecksなどのstrictの設定はこう使う
function echo(message: string) {
  return message;
}
let implicitAny;
implicitAny = 'hello';
// let nullabeleMessage: string = null;
// let undefinedMessage: string = undefined;
// let onlyNull: null = undefined;

// 77. インデックスシグネチャを使用して柔軟なオブジェクトを作る方法
interface Designer {
  name: string;
}

const designer: Designer = {
  name: 'taro',
};

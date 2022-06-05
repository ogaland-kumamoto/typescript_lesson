// 93. こうしてジェネリクスを使って、型を引数として受け取る
function copy<T,U>(value: any){
    return value;
}
console.log(copy<string,string>('hello'));
// console.log(copy({name: 'Quill'}) as {name:string } )
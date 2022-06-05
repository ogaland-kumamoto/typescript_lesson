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
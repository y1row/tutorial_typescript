// 2つのプロパティを持つオブジェクト
let a: {
  firstName: string,
  lastName: string
} = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(a);

// TS2739: Type '{}' is missing the following properties from type '{ firstName: string; lastName: string; }': firstName, lastName
//a = {}
// a = {} だと必要なプロパティが渡っていないのでエラー

// 再代入
a = {firstName: '太郎', lastName: '田中'}
console.log(a);

// class を使ったクラス定義
class Person {
  constructor(public firstName: string, public lastName: string) {
  }

  fullName(): string {
    return `fullName is ${this.firstName} ${this.lastName}`
  }
}

// インスタンス生成
let b = new Person('花子', '山田')
console.log(b);

// 同じプロパティを持つオブジェクトなので、代入が出来る
a = b
console.log(b)
console.log(b.fullName())

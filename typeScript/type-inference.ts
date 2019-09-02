

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let someOne;
someOne = 'seven'
someOne = 7
console.log(someOne)
console.log(someOne)
/*
* 等价于
* let someOne: any;
* someOne = 'seven';
* someOne = 7;
* */

/*但是 如果没有明确的指定类型，却直接赋值操作，
那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
例如：*/
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 事实上，它等价于：

// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
//
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
/*

let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;*/

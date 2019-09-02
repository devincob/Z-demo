function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

let isDone:boolean = false
// console.log(typeof isDone)
let createByNewBoolean:boolean =  Boolean(1)
// console.log(createByNewBoolean)
// console.log(typeof createByNewBoolean)
console.log('................Boolean...............')

let dec:number = 6
console.log(dec)
console.log(typeof dec)

let hex :number =0xf00d;//es6 二进制
console.log(hex)
console.log(typeof hex)

let bi :number =0b1010;//es6 八进制
console.log(bi)
console.log(typeof bi)

let oc: number = 0o744;
console.log(oc)
console.log(typeof oc)

let notANumber: number = NaN;
console.log(notANumber)
console.log(typeof notANumber)

let infinityNumber: number = Infinity;
console.log(infinityNumber)
console.log(typeof infinityNumber)

let myName:string = 'devin';
let myAge:string = '25';
console.log('................Number.................')
let sentence:string =`Hello, my name is ${myName}.I'll be ${myAge + 1} years old next month.`; //模板字符串
var sentence1 = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";

console.log(sentence)
console.log(typeof sentence)
console.log(sentence1)
console.log(typeof sentence1)
console.log('..................String.................')


// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;
let alertFn = alertName()
console.log(alertFn)
console.log(unusable)
console.log('..................void.................')

// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u: undefined = undefined;
let n: null = null;
// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
console.log(u)
console.log(n)
console.log(typeof u)
// 这样不会报错
let num: number = undefined;
console.log(num)
// 这样也不会报错
let uu: undefined;
let numm: number = uu;

// 而 void 类型的变量不能赋值给 number 类型的变量：
/*let ux: void;
let numx: number = ux;*/

// 这样不会报错
let st: String = undefined;
console.log(st)
console.log(typeof st)
console.log('..................Null 和 Undefined.................')


/*
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
什么是接口
在面向对象语言中，接口（Interfaces）是一个很重要的概念，
它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
TypeScript 中的接口是一个非常灵活的概念，
除了可用于对类的一部分行为进行抽象以外，
也常用于对「对象的形状（Shape）」进行描述。
*/

// 简单的例子
interface Person {// 用inderface定义一个接口Person
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
console.log(tom)
/*
上面的例子中，我们定义了一个接口 Person，
接着定义了一个变量 tom，它的类型是 Person。
这样，我们就约束了 tom 的形状必须和接口 Person 一致。
*/

// 接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。
// 定义的变量比接口少了一些属性或者多一些属性都是不允许的：

/*
let jack: Person = {
    name: 'Tom'
};

// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.
*/

/*
let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
// 可见，赋值的时候，变量的形状必须和接口的形状保持一致。
// 可选属性
*/
// 可选属性
// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：
console.log('.....可选属性的含义是该属性可以不存在.....')
interface male {
    name: string;
    age?: number;
}

let devin: male = {
    name: 'Tom'
};

let devincob: Person = {
    name: 'Tom',
    age: 25
};
console.log('devin',devin)
console.log('devincob',devincob)
// 可选属性的含义是该属性可以不存在。
// 这时仍然不允许添加未定义的属性：
/*
let devinTome:male = {
    name:'devinTim',
    age:34,
    gender:'male'
}
// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
*/

// 任意属性
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
interface female {
    name: string;
    age?: number;
    [propName: string]: any;
}

let duomiya: female = {
    name: 'mimi',
    gender: 'female'
};

let rose:female = {
    name:'rose',
    age:18,
    gender:'female',
    job:'av'
}
console.log(duomiya)
console.log(rose)
// 使用 [propName: string] 定义了任意属性取 string 类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
/*
interface school {
    name: string;
    level?: number;
    [propName: string]: string;
}

let specialSchool: school = {
    name: 'Fudan University',
    level: 5,
    students: 5000
};
// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
// Index signatures are incompatible.
// Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.

// 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，
number 不是 string 的子属性，所以报错了。
// 另外，在报错信息中可以看出，
// 此时 { name: 'Tom', age: 25, gender: 'male' } 的类型
// 被推断成了 { [x: string]: string | number; name: string; age: number; gender: string; }，这是联合类型和接口的结合。
*/

// 只读属性
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
interface ReadonlyFile {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let files: ReadonlyFile = {
    id: 89757,
    name: 'file89757',
    nature: '绝密'
};

files.nature = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
// 上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。

// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

/*
interface Persons {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let toms: Persons = {
    name: 'Tom',
    id:1231,
    gender: 'male'
};

toms.id = 89757;

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.

// 上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。
// 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了。
*/

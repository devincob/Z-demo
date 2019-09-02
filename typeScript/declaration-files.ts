// 当使用第三方库的时候需要引用它的声明文件，
// 才能获得对应的代码补全接口提示灯功能
// declare var 声明全局变量

// 什么是声明语句
// 假如我们想使用第三方库 jQuery，
// 一种常见的方式是在 html 中通过 <script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。
// 我们通常这样获取一个 id 是 foo 的元素：
// $('#foo');  or jQuery('#foo');
// 但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西1：
// jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.
// 这时，我们需要使用 declare var 来定义它的类型2：
declare var jQuery: (selector: string) => any;

let a = jQuery('#foo');
console.log(a);
// 上例中，declare var 并没有真的定义一个变量，
// 只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是：
// jQuery('#foo');
// 除了 declare var 之外，还有其他很多种声明语句，将会在后面详细介绍。

// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// / <reference /> 三斜线指令

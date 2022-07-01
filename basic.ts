console.log("Hello,TS!");

// 以前
let normal = 10;
normal = 123;
// TypeScript
let a: number = 10;
a = 123456;
let b: string = "10";
b = "Hello,B!";
let c :boolean = false;
c = true;

// 此行报错，a的类型是number，不能赋值string
// 不过即使报错，也会编译通过
// a="ts"; 

// 默认编译成var的ES3

function sum(a:number,b:number){
    return a + b;
}

sum(123,456);
// 字符串类型报错
// sum(123,"456");
// 参数传多了报错
// sum(123,456,899);
// 参数传少了报错
// sum(123);

function add(a:number,b:number):number{
    return a +b;
}
let result =  sum(123,456);
// let error = "hi";
// error = sum(1,4);


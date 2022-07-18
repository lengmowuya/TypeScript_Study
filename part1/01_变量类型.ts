// TS字面量声明
let a: 10;
// 不能修改成其他值，类似常量
// a = 11;  // 报错

// 可以使用 | 来连接多个类型，包括字面量类型(联合类型)
let sex: "male" | "female";
sex = "male";
sex = "female";
// sex = "hello";  // 报错

let c : boolean | string;
c = true;
c = "hello";
// c = 5 // 报错

// 跟原生一样的任意类型 设置any后相当于对其关闭了TS的类型检测
// 使用TS时，不建议用any类型
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
let d: any; // 避免
// let d;  // 更避免
d = 10;
d = 'hello';
d = true;

let e: unknown;
e = 10;
e = "hello";
e = true;

let s:string;
// 将any赋值给字符串时不会报错
// d的类型的是any，它可以赋值给任意变量
s = d;

e = "hello";
// 将unknown赋值给其他变量会报错，哪怕两者都是字符串
// s = e; // 报错
// 需要判断后赋值 // TS解析器比较智能
if(typeof e === "string"){
    s = e;
}
// 但是也没那么智能 // TS解析器也没那么智能
// if(typeof e === ("str"+"ing")){
//     s = e;  // 报错
// }
// 

// 类型断言 告诉编译器这就是字符串类型，放心使用
// 两种写法效果一致
s = e as string;
s = <string>e;

// void 和 never主要用于设置函数的返回值
function fn() :void{
    // return undefined; // 返回undefined不会报错
    return ;  // 单纯使用return 不会报错
}
// 用的比较少，报错函数永远不会返回结果
function returnFun():never{
    throw new Error("报错");
}
// TS默认会判断函数返回值类型
function fun(num){
    if(num){
        return true;
    }else{
        return false;
    }
}
// TS里函数返回值类型不一致时会变成联合类型的字面量类型
function fun2(bool:boolean){
    if(bool){
        return true;
    }else{
        return 'false';
    }
}
let result1 :boolean = false;
let result2 :boolean|string|557;
let result3 :true|"false";
// 联合类型不能赋值给不一致的联合类型
// result1 = fun2(true); // 报错

// 联合类型可以赋值给包含范围更大的联合类型
result2 = fun2(true);
result3 = fun2(true);

//
let obj : object;
obj = {};
obj = function(){

}

// 这种声明方式要求后面赋值的对象必须有name属性
//结构必须一模一样
let obj2: {name:string};
// obj2 = {} //报错，属性少了
// obj2 = {name:'',sex:"female"}; // 报错，属性多了

// 属性后面加上？，表示属性是可选的
let obj3:{name:string,age?:number};
obj3 = {name:"555"};

// [propName: string]: any 表示任意类型属性
// 要求拥有name就行,其他位置随意
let obj4 : {name:string,[propName: string]: any};
obj4 = {name:"冷漠乌鸦",sex:"男",age:18};

let obj5: {[propName: string]:any};
obj5 = {};
obj5 = {car:"none",house:"none",girlFriend:"none"};
obj5 = function(){

}

let function_01: Function;
//声明函数，要求两个参数和返回值都是整数类型
let function_02: (a: number,b: number)=>number;
function_02 = function(n1:number,n2:number):number{
    return n1+n2;
}

// 赋值函数与声明要求结构不一致
// function_02 = function(n1:string,n2:number,n3):void{
//     return n1+n2;
// }
let array1 : string[];
let array2 : number[];
let array3: Array<number>;


// 元组 限制了长度的数组
let h:[string,number];
h = ['hello',123];



// // 指鹿为马
// function getAnimal(): '马'{
//     return '鹿';
// }

// // 暗度陈仓
// function isArray(array:Array<any>): boolean{
//     if(Array.isArray(array) == false){
//         return false
//     }else{
//         arguments[0] = {};
//         return isArray(array);
//     }
// }


// 枚举
enum Gender{
    Male = 0,
    Female = 1
}

let i: {name:string,gender: Gender};
i = {
    name: '孙悟空',
    gender:Gender.Male  
}

// &表示同时
let j: string & number;  // 一个值不可能两种都满足，所以无意义
let o: {name:string} & {age:number};
o = {name:"孙悟空",age:55};


// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
type yourType = 1 | 2 | 3 | 4 | 5 | 8;
// 继续添加
let k : myType | string;
// 重复的也没关系
let l : myType | yourType;
let m : myType;
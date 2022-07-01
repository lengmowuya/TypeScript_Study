// TS字面量声明
var a;
// 不能修改成其他值，类似常量
// a = 11;  // 报错
// 可以使用 | 来连接多个类型，包括字面量类型(联合类型)
var sex;
sex = "male";
sex = "female";
// sex = "hello";  // 报错
var c;
c = true;
c = "hello";
// c = 5 // 报错
// 跟原生一样的任意类型 设置any后相当于对其关闭了TS的类型检测
// 使用TS时，不建议用any类型
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
var d; // 避免
// let d;  // 更避免
d = 10;
d = 'hello';
d = true;
var e;
e = 10;
e = "hello";
e = true;
var s;
// 将any赋值给字符串时不会报错
// d的类型的是any，它可以赋值给任意变量
s = d;
e = "hello";
// 将unknown赋值给其他变量会报错，哪怕两者都是字符串
// s = e; // 报错
// 需要判断后赋值 // TS解析器比较智能
if (typeof e === "string") {
    s = e;
}
// 但是也没那么智能 // TS解析器也没那么智能
// if(typeof e === ("str"+"ing")){
//     s = e;  // 报错
// }
// 
// 类型断言 告诉编译器这就是字符串类型，放心使用
// 两种写法效果一致
s = e;
s = e;
// void 和 never主要用于设置函数的返回值
function fn() {
    // return undefined; // 返回undefined不会报错
    return; // 单纯使用return 不会报错
}
// 用的比较少，报错函数永远不会返回结果
function returnFun() {
    throw new Error("报错");
}
// TS默认会判断函数返回值类型
function fun(num) {
    if (num) {
        return true;
    }
    else {
        return false;
    }
}
// TS里函数返回值类型不一致时会变成联合类型的字面量类型
function fun2(bool) {
    if (bool) {
        return true;
    }
    else {
        return 'false';
    }
}
var result1 = false;
var result2;
var result3;
// 联合类型不能赋值给不一致的联合类型
// result1 = fun2(true); // 报错
// 联合类型可以赋值给包含范围更大的联合类型
result2 = fun2(true);
result3 = fun2(true);
//
var obj;
obj = {};
obj = function () {
};
// 这种声明方式要求后面赋值的对象必须有name属性
//结构必须一模一样
var obj2;
// obj2 = {} //报错，属性少了
// obj2 = {name:'',sex:"female"}; // 报错，属性多了
// 属性后面加上？，表示属性是可选的
var obj3;
obj3 = { name: "555" };
// [propName: string]: any 表示任意类型属性
// 要求拥有name就行,其他位置随意
var obj4;
obj4 = { name: "冷漠乌鸦", sex: "男", age: 18 };
var obj5;
obj5 = {};
obj5 = { car: "none", house: "none", girlFriend: "none" };
obj5 = function () {
};
var function_01;
//声明函数，要求两个参数和返回值都是整数类型
var function_02;
function_02 = function (n1, n2) {
    return n1 + n2;
};
// 赋值函数与声明要求结构不一致
// function_02 = function(n1:string,n2:number,n3):void{
//     return n1+n2;
// }
var array1;
var array2;
var array3;
// 元组 限制了长度的数组
var h;
h = ['hello', 123];
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
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);

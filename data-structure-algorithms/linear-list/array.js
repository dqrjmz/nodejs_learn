
/**
 * 数组
 * 
 * 优点:
 * 1. 查快
 * 
 * 劣势:
 * 2. 增，删慢,
 */

// 菲波那切数列
// var arr=[];
// arr[1]=1;
// arr[2]=2;

// for(var i=3;i<20;i++){
//     arr[i]=arr[i-1]+arr[i-2];
// }
// console.log(arr);

//给数组最前面添加一位
// var arr=[1,3,3];
// for(var i=arr.length;i>=1;i--){
//     arr[i]=arr[i-1];
// }
// arr[0]=-1;
// console.log(arr);

// 给数组尾部添加元素
// var arr=[1,2,3];
// arr[arr.length]=1;
// console.log(arr);

// 删除数组第一个元素
// var arr=[1,2,3,4];
// for(var i=0;i<arr.length;i++){
//     arr[i]=arr[i+1];
// }
// console.log(arr);

// 数组迭代器
var arr = [1, 2, 3, 4, 5];
/*
 * 当有一个数组处理后返回false
 * 就停止
 */
arr.every(function (el) {
    console.log(el);
    return el % 2 === 0 ? true : false;
})

/*
当有一个返回true，处理结束
*/

arr.some(function (el) {
    console.log(el);
    return el % 2 === 0 ? true : false;
})

// 返回新数组
// map遍历所有元素
var a = arr.map(function (el) {
    return el % 2 === 0 ? true : false;
})
console.log(a);
var b = arr.filter(function (el) {
    return el % 2 === 0 ? true : false
})
console.log(b);

var i = 1, n = 101;
console.log((n + 1) * (n / 2));

function maxGy(n, m) {
    if (n < m) {
        var r = m % n;
        if (r === 0) {
            console.log(r);
        } else {
            maxGy(n, r);
        }
    } else {
        var temp = n;
        n = m;
        m = temp;
        maxGy(n, m);
    }
}
maxGy(2, 10);

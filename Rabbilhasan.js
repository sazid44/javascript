
//Use of strict mode
//"use strict"
myname();
function myname(){
    name='sazid';
}
//Spread Operator
let a=['a','b','c'];
let b=[...a,'d','e','f'];
console.log(b);
//rest parameter
function calculate(a,b,...num){
    let sum=0;
    for(let i of num){
        sum=sum+i;
        }
        console.log(sum);
}
calculate(10,20,1,2,3,4,5);
//Dynamic function
var f=function(value){
    return value;
}
console.log(f('sazid'));
//Arrow function
var arrowFunction=()=>{
    return 'hello';
}
console.log(arrowFunction());
//array de structuring
var array=["ban","pak","ind","usa"]
var[x,,,y]=array
console.log(y);
//Javascript Map
var myMap=new Map();
myMap.set("key1", "value1")
myMap.set("key2", "value2")
myMap.set("key3", "value3")
console.log(myMap.values());
console.log(myMap.keys());
myMap.delete("key1")
console.log(myMap.get("key1"));
//myMap.clear()
if (myMap.has("key2")) {
console.log("yes");
}
//rabbil class & constructor

class myClass{
myFun() {  
   console.log('hello everyone');
   }
static stFun() {  
    console.log('I am static');
    }
constructor(para){
    console.log(para);
    }
}
new myClass("Passing parameter inside constructor");
var obj=new myClass;
obj.myFun();
myClass.stFun();
//class inheritance
class parent{
    parentFun(){
        console.log('parent');
    }
    parentFun1(){
        console.log('parent1');
    }
}
class child extends parent{
    parentFun(){
        console.log('parent Child');//method overriding
    }
    demo(){
super.parentFun();
super.parentFun1();
    }
}
var childObj=new child;
childObj.parentFun()
childObj.demo()

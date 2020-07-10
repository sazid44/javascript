//Use of forEach
numbers=[10,20,30,40,50]
squreNumbers=[]
numbers.forEach(function (x){
console.log(x);
})
numbers.forEach(function (x){
squreNumbers.push(x*x)
})
console.log(squreNumbers);
numbers.forEach(function (x,index,arr){
arr[index]=x+5;
})
console.log(numbers);


//MAP function
newArray=numbers.map(function (x){
return x*x;
})
console.log(newArray);


//FILTER function
filteredArray=numbers.filter(function (x){
return x>10
})
console.log(filteredArray);

/*let m=parseInt(prompt('Enter first number :'));
let n=parseInt(prompt('Enter last number:'));

var sum=0;
for(var x=m; x<=n; x=x+1){
    sum=sum+x;
}
document.write(sum); */
//use of function
function squre(num1,num2){
    var result=num1*num2;
    console.log('sum='+result);
   
}
squre(5,6)
//Use of Array
//method 01
var names=['a','b','c','d','e']
names.push('f')//pushes element at the last
names.unshift('f') //pushes element at the first
names.pop()//deletes element from the last
names.shift() //deletes element from the first

console.log(names[0]);

//use of splice method in array
names.splice(4,0,'f','g','h')
console.log(names);
names.splice(1,2)
console.log(names);
var newArray=names.slice(1,2)
console.log(newArray);
console.log(names);
var sortedNames=names.sort()
console.log(sortedNames);
var n=[4,2,3]
n.sort(function(a,b){
return a-b
})
console.log(n);

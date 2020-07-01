/*
var name='sazid',age=17,gpa=2.5,lang=[bangla,english]
var name='rahim',age=16,gpa=3.5,lang=[bangla,english,hindi]
var name='karim',age=18,gpa=4.5,lang=[bangla,english,manderin]

//making an object
var student1={
    name='sazid',
    age=17,
    gpa=2.5,
    lang=[bangla,english]
}
console.log(student1.name); 

var student2={
    name='rahim',
    age=16,
    gpa=3.5,
    lang=[bangla,english,hindi]
}
console.log(student2.name);
var student3={
   name='karim',
   age=18,
   gpa=4.5,
   lang=[bangla,english,manderin]
}
console.log(student3.name);
*/
 //Use of constructor
 function Student(name,age,gpa,lang){
     this.name=name
     this.age=age
     this.gpa=gpa
     this.lang=lang

     this.display=function(){
     console.log(this.name);
     console.log(this.age);
     console.log(this.gpa);
     console.log(this.lang);     
}
}
var student1=new Student('sazid',17,2.5,[bangla,english])
var student2=new Student('rahim',16,3.5,[bangla,english,hindi])
var student3=new Student('karim',18,4.5,[bangla,english,manderin])

student1.display()
student2.display()
student3.display()

/*
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
console.log(student1.lang);

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
console.log(student2.lang);

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
console.log(student3.lang);
*/
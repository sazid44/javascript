import {china,india,name,newClass} from './export.js';
console.log(china,india);
name();
let obj=new newClass();
obj.classFun();
import x from './export.js';//default exports can change name
let exportDefault=new x();
exportDefault.funClass();



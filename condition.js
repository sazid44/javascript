//Letter Grade programm with (if,elif and else)        
var mark=prompt("Enter a number:")                    
if(mark>=80 && mark<=100)
   document.write('A+')
else if(mark>=70 && mark<=79)
   document.write('A')
else if(mark>=60 && mark<=69)
   document.write('A-')
else if(mark>=50 && mark<=59)      
   document.write('B')
else if(mark>=40 && mark<=49)
   document.write('C')
else if(mark>=33)
   document.write('D')
else
   document.write('Fail')

 //Use of switch,case,break and default
var digit = parseInt(prompt("Enter a digit : "));
switch (digit) {
    case 0:
        document.write("Zero");
        break;
case 1:
case 2:
case 3:
case 4:
case 5: 
        document.write("One-five");
        break;
case 6:
case 7:
case 8:
case 9:
case 10:
        document.write("six-ten");
        break;

default:
        document.write("Not a digit");
}












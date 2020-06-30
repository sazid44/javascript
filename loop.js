
//FOR LOOP
for( x=1; x<=3; x=x+1){
            document.write("<h1>Bangladesh</h1>"); 
        }
        document.write('END'); 
//WHILE LOOP
        x=1
while( x<=3){
            document.write("<h1>Bangladesh</h1>"); 
            x=x+1
        }
        document.write('END'); 
//DO WHILE LOOP
    x=1      
do {
    document.write("<h1>Bangladesh</h1>");
    x=x+1
} while (x<=3);

//BREAK AND CONTINUE STATEMENT

for(x=1; x<=10; x=x+1){
    if(x==5){
        break;
    }
    document.write(' '+x); 
}
document.write('END'); 
for(x=1; x<=10; x=x+1){
    
    document.write(' '+x);
    if(x==5){
        break;
    }
}
document.write('END'); 
for(x=1; x<=10; x=x+1){
    
    document.write(' '+x);
    if(x==5){
        continue;
    }
}
document.write('END'); 
for( x=1; x<=10; x=x+1){
    if(x==5){
        continue;
    }
    document.write(' '+x);
    
}
document.write('END'); 




//module(export & import)
const china="laptop";
const india="new laptop"
export{china,india};
export function name() {
    console.log('I am a function');
    }
export class newClass{
        classFun(){
            console.log('class is importing');
        }
    }
class defaultClass{
        funClass(){
            console.log('class is importing in default way');
        }
    }
    export default defaultClass;
    
// characters repeated return true else false

function repChar(str){
debugger 
 let obj={};
debugger
 for (let char of str){
debugger 
if(obj[char]){
debugger
 return true;
 }else
 {
debugger
 obj[char]=true;
 
 }
 
 }
debugger
 return false;
 
 
 }
 
 console.log(repChar('programming'));//true
 console.log(repChar('mind'));//false
 console.log(repChar('level'));//true

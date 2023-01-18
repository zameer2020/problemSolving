/* Write a program which takes 2 parameters, first parameter is an array of positive integers and the second parameter is a number.
  
Return true if the sum of any element of an array with the number provided is 100. if not returns false.


Note: Cover all the edge case
 
  
    Example1: 
     input1: [1,10,2,3,4,5]
    input2: 10
     output: false;
    
    
    Example2: 
     input1: [1,10,2,3,4,5,99]
    input2: 1
    output: true; */


function twoParameters(arr,no){   
debugger; 
    
    if(arr.length>=0){ 
            debugger;                            for(let i=0;i<=arr.length-1;i++){
                                                        let sum=0;
                debugger;                                        sum=arr[i]+no;
                                                        if(sum==100){
                                                        return true;
                                                                                }
                                                                                                        }    
                                    }
    return false;
                                                                    }

    
    input1=[1,10,2,3,4,5];   
    input2=10;debugger;
    console.log(twoParameters(input1,input2));//false
    
     input11= [1,10,2,3,4,5,99];
    input12= 1;
   console.log(twoParameters(input11,input12));//true 

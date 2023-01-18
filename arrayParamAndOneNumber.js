/* Write a program with takes two inputs, first input is an array and the second input is a number.
Return  true if any two elements of the array's sum matches with the input2 provided.
If not return false.

Example1: 
  input1: [1,2,3,4,5]
  input2: 8
  
  output : true;
  
Example2: 
  input1: [1,2,3,4,5]
  input2: 10
  
  output : false; */


  
  let paramArray=[1,2,3,4,5];
  let paramNumber=8;
   
  
   function arrayParamAndOneNumber(paramArray,paramNumber){
  if (paramArray.length>=2){
  
                          for(let i=0;i<=paramArray.length-1;i++)
                          
                          { 
                          for(let j=0;j<=paramArray.length-1;j++)
                          																		{
                          if(paramArray[i]!=paramArray[j] )
                         																	 {
                          if(paramArray[i]+paramArray[j]==paramNumber){
                          return true;
                          																						}
                          
                            															}
                           																								 }
                          
                          
                          																				}
  }
  return false;
  																													}
  
  console.log(arrayParamAndOneNumber(paramArray,paramNumber));//true
  
  let paramNumberOne=10;
   console.log(arrayParamAndOneNumber(paramArray,paramNumberOne));//false

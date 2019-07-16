//Write a defining table and a function to multiply each element in an array by some value.

//multiply(list, multiplier)-this is multiplication function
function multiply(list, x){
    let newlist= new Array(list.length);
    
    for(let i=0;i<list.length;i++){
        newlist[i]=list[i]*x;
}
return newlist;
}
//multiplies by 3, output is products result
function doTest(){
let list=[1,2,3,4,5,6,7,8,9,10];
let products=multiply(list,3);
document.getElementById('output').innerHTML=products;
}

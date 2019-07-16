//Programming Assignment 12-1
//Write a defining table and a function that returns the sum of the first and last values in an array. The function must have this header:function addEnds(list)

//The generic parameter name could be anything but we selected the identifier of list which parameter is intended to receive any size of an array.
let list= [2,1,2,3,4,5];
document.getElementById('output').innerHTML=addEnds(list);
function addEnds(list){
	return list[0]+list[list.length-1]
}
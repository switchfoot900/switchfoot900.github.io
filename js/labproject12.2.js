//Write a defining table and a function that returns the value of the middle element in an array. If the array has an even number of elements, then this function must return the average of the two middle elements.
//GETS MIDDLE NUMBER
let values= [1,2,3,4,5,6,7,8,9];
let middleNumber= values[4]; //LOCATION 4
document.getElementById('output').innerHTML=middleNumber;



function sum(list){
	let s=0;
	for(let i=0;i<list.length;i++){
		s+=list[i];
	}
	return s;
	}

	function doTest(){
	let list=[1,2,3,4,5,6,7,8,9];
		let product=sum(list);
		
	//outputs sum of list and divides by number of values resulting in average
	document.getElementById('output2').innerHTML=product/list.length
;
}




// Write a defining table and a function named countEvens that counts and returns the number of even integers in an array.


function addEvens(list){
	numOfEvens=0;
		for(let x=0; x<list.length; x++){
			if( list[x]%2 == 0){
				numOfEvens++;
			}
		}
	return numOfEvens;
	}


function doTest(){
	let myArray=[17,8,9,5,20,100,99,2,2,2,2,2,2,2];
	document.getElementById('output').innerHTML=addEvens(myArray)
;
}



	
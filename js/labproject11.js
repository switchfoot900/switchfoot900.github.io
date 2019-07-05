function doFV() {
	//INPUT Get User inputs for principle, annual percentage rate, number of years and how many times during the year investment will get paid interest...
	
	let principle= document.getElementById('p').value;
	let apr= document.getElementById('apr').value;
	let years= document.getElementById('y').value;
	let periods= document.getElementById('n').value;
	let fv= computeFutureValue(principle, apr, years, periods);
	document.getElementById('output').innerHTML=fv.toFixed(2); //OUTPUT fv result from calculation below ''(fv)''
}
	//PROCESSING future value calculation
function computeFutureValue(principle,apr,years,periods){
	let rate = apr/periods;
	let n = years*periods;
	let fv=principle * Math.pow((1+rate),n);
	return fv; //returns value from calculation
}
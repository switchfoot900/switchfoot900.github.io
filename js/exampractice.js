
    

//INPUT GETS USER INPUT ON FAHRENHEIT AND WINDSPEED
function doInputOutput() {
    let t= parseInt(document.getElementById('t').value);
		let s= parseInt(document.getElementById('s').value);
		
if (t>50 || s<3) {
	let outputDIV="N/A";
	document.getElementById("outputDIV").innerHTML=outputDIV;
}
	else{
		let output=windChill(t,s);
		document.getElementById("outputDIV").innerHTML=output;
	}}
	//PROCESSING
function windChill(t, s) {
  let c = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * (t * Math.pow(s, 0.16)));
  return Math.round(c);
      }

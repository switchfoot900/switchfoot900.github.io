//Your program will calculate the windchill factor given a current temperature and current wind speed as inputs. We will be working in Fahrenheit (F) units.
//In this program you are required to use functions. One function's job is to get the input, call the windChill() function, and finally to produce the output to the screen. Your functions should have these header (signature lines):
//function doInputOutput()
//function windChill(tempF, speed)

//INPUT GETS USER INPUT ON FAHRENHEIT AND WINDSPEED
function doInputOutput() {
    let t= parseInt(document.getElementById('t').value);
		let s= parseInt(document.getElementById('s').value);
	
	  //PROCESSING+OUTPUT
		// If temperature more than 50 OR windspeed is less than 3="N/A"
if (t>50 || s<3) {
	let outputDIV="N/A";
	document.getElementById("outputDIV").innerHTML=outputDIV;
}
	else{
		let output=windChill(t,s);
		document.getElementById("outputDIV").innerHTML=output.toFixed(2) +" "+"degrees fahreinheit";//IF MEETS SPECIFIED CONDITIONS
	}}
	//PROCESSING //FORMULA FOR CALCULATING WINDCHILL
function windChill(t, s) {
  let c = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * (t * Math.pow(s, 0.16)));
  return(c);
      }


//function windChill(t,s){
 //let c= 35.74+(0.6215*t)-(35.75*Math.pow(s, 0.16))+(0.4275*t)*Math.pow(s, 0.16); return Math.round(c);} 

	//TEST
	//document.getElementById('outputDIV').innerHTML= wc.toFixed(2)+" "+ "degrees Fahrenheit";
//Write a defining table and a program that that outputs the times table from 1 to 12 for any positive integer that the USER INPUTS from 1 to 10 inclusive.Your output should look like the following example given that the user entered 5: 
// 5 x 1 = 5
// 5 x 2 = 10
   // INPUT User inputs 1 number between 1 and 10
   // PROCESSING input is multiplied by 1 to 12
   // OUTPUT display user input multiplied by 1 through 12 TABLE
   function getTotal () {
    //INPUT
    let integer = parseInt(document.getElementById('integer').value); //defines user input;
    let table="";
    //PROCESSING-starting multiplication number begins at 1;if starting number is less than or equal to 12, then number increments;
    for(let i=1;i <=12; i++){
        let result=i*integer;
        table += integer + "x" + i + "=" + integer*i + "<br>";
    }
        if(integer>10 || integer<0){
            table = "Enter a number between *1* and *10* only"
        }
    //OUTPUT
    document.getElementById('output').innerHTML= table;
    
    }
    
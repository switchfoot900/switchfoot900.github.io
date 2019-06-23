//Write a defining table and a JavaScript program that outputs an the oldest, running temple of The Church from a limited list provided in an HTML data table that is provided as shown in the image.

//Your program must use a looping structure to process each data row of the table. The HTML for the table and for table's style is provided.
//INPUT
//PROCESSING Go through list of rows and columns that will determine oldest temple date
//OUTPUT Display oldest temple NAME

let table= document.getElementById('templeData');
let x= parseInt(table.rows[1].cells[1].innerHTML);
//PROCESSING begin at 2, only go up to 7th row, auto-incr.
for(let i=2; i<7; i++) {
	if(parseInt(table.rows[i].cells[1].innerHTML)<x) {x=parseInt(table.rows[i].cells[1].innerHTML);
let oldestTemple=(table.rows[i].cells[0].innerHTML);																																						
//OUTPUT
document.getElementById('output').innerHTML= oldestTemple;
	
}
}



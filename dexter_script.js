/*Script file for the Chapter 12 - Dexter's Lab*/

// event listener for the button click
document.getElementById('button').addEventListener("click", addClone);

// global variable which starts the clone count at zero
var cloneAmount = 0;

// definition of the addClone() function
function addClone() {
	// Increment the cloneAmount when the function starts
	cloneAmount++;

	if(cloneAmount <= 10) {

	// write the cloneAmount to the document
	document.getElementById("cloneCount").textContent = cloneAmount;

	// variable that creates the data for a new <img> element node
	var newImg = document.createElement("img");
	// set the src attribute of that new <img> element node
	newImg.setAttribute("src", "deedee.png");
	// append the completed <img> node to the document
	document.getElementById("dextersLab").appendChild(newImg);

	} else {
		document.getElementsByTagName("h3")[0].innerHTML = "DEE DEE! STOP!";
		document.getElementById('button').removeEventListener("click", addClone);
	}
}
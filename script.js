var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var selection = document.getElementById("style").value

console.log(selection)

function updateGradient() {
	selection = document.getElementById("style").value
	if (selection === "linear-toright") {
		updateGradientToRight()
	}
	else if (selection === "radial") {
		updateGradientRadial()
	}
	else if (selection === "linear-tobottom") {
		updateGradientToBottom()
	}
	else if (selection === "linear-totopright") {
		updateGradientToTopRight()
	}
	else if (selection === "linear-tobottomright") {
		updateGradientToBottomRight()
	}
}



function updateGradientToRight() {
	body.style.background = 
		"linear-gradient(to right, "
		 + color1.value
		 + ", "
		 + color2.value
		 + ")";

	css.textContent = body.style.background + ";" 
}

function updateGradientToBottom() {
	body.style.background = 
		"linear-gradient(to bottom, "
		 + color1.value
		 + ", "
		 + color2.value
		 + ") fixed";

	css.textContent = body.style.background + ";" 
}

function updateGradientRadial() {
	body.style.background = 
		"radial-gradient(circle at center, "
		 + color1.value
		 + ", "
		 + color2.value
		 + ") fixed";

	css.textContent = body.style.background + ";" 
}


function updateGradientToTopRight() {
	body.style.background = 
		"linear-gradient(to top right, "
		 + color1.value
		 + ", "
		 + color2.value
		 + ") fixed";

	css.textContent = body.style.background + ";" 
}


function updateGradientToBottomRight() {
	body.style.background = 
		"linear-gradient(to bottom right, "
		 + color1.value
		 + ", "
		 + color2.value
		 + ") fixed";

	css.textContent = body.style.background + ";" 
}


color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
document.getElementById("style").onchange = updateGradient;
function change_image() {
	if (document.getElementById("btnChangeImage").value == "0"){
		document.getElementById("iImage").src = "./images/python2.jpg";
		document.getElementById("btnChangeImage").value = "1";
	}
	else{
		document.getElementById("iImage").src = "./images/python1.jpg";
		document.getElementById("btnChangeImage").value = "0";
	}
}

function date_time() {
	var d = new Date()
	if (document.getElementById("btnDateTime").value == "0"){
		document.getElementById("btnDateTime").innerText="Display Time";
		document.getElementById("btnDateTime").value = "1";
		document.getElementById("txtdatetime").innerHTML = d.toLocaleDateString();
	}
	else{
		document.getElementById("btnDateTime").innerText= "Display Date";
		document.getElementById("btnDateTime").value = "0";
		document.getElementById("txtdatetime").innerHTML = d.toLocaleTimeString();;
	}
}

function message(){
	alert("Welcome");
}

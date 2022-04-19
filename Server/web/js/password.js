document.querySelector("#switch").addEventListener("change", (e) => {
	console.log(e.target.checked);
	if (e.target.checked) {
		document.querySelector("#pass").type = "text";
	} else {
		document.querySelector("#pass").type = "password";
	}
});

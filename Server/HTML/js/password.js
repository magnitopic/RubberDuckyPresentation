function change() {
    var decider = document.getElementById('switch');
    if(decider.checked){
		document.getElementById('pass').type = 'text';
    } else {
		document.getElementById('pass').type = 'password';
    }
}

function display(area) {
	var person = area.id;
	logName(person)
	switch (person) {
		
		case 'Zeus':
			Zeus();
			break;
			
		case 'Hestia':
			Hestia();
			break;
			
		case 'Demeter':
			Demeter();
			break;
			
		case 'Hades':
			Hades();
			break;
			
		case 'Hera':
			Hera();
			break;
			
		case 'Poseidon':
			Poseidon();
			break;
			
		case 'Uranus':
			Uranus();
			break;	
	}
	
	infoBox.classList.add('fadeIn');
	
}

function logName(person) {
	console.log(person);
	document.getElementById("infoName").innerText = person;
	document.getElementById("link1").innerText = "";
	document.getElementById("link1").href = "";
	document.getElementById("link2").innerText = "";
	document.getElementById("link2").href = "";
}

function Zeus() {
	document.getElementById("link1").innerText = "Chapter 7: Zeus (Jupiter)";
	document.getElementById("link1").href = "chap7.html#diogenes_4";
	document.getElementById("link2").innerText = "Chapter 3: Cronus (Saturn)";
	document.getElementById("link2").href = "chap3.html#zeusMention";
}

function Hestia() {
	document.getElementById("link1").innerText = "Chapter 11: Hestia (Vesta)";
	document.getElementById("link1").href = "chap11.html#diogenes_4";
	document.getElementById("link2").innerText = "Chapter 3: Cronus (Saturn)";
	document.getElementById("link2").href = "chap3.html#zeusMention";
}

function Demeter() {
	document.getElementById("link1").innerText = "Chapter 12: Demeter (Ceres)";
	document.getElementById("link1").href = "chap12.html#diogenes_4";
	document.getElementById("link2").innerText = "Chapter 3: Cronus (Saturn)";
	document.getElementById("link2").href = "chap3.html#zeusMention";
}

function Hades() {
	document.getElementById("link1").innerText = "Chapter 35: Aïdes (Pluto)";
	document.getElementById("link1").href = "chap35.html#diogenes_4";
	document.getElementById("link2").innerText = "Chapter 3: Cronus (Saturn)";
	document.getElementById("link2").href = "chap3.html#zeusMention";
}

function Hera() {
	document.getElementById("link1").innerText = "Chapter 8: Hera (Juno)";
	document.getElementById("link1").href = "chap8.html#diogenes_4";
	document.getElementById("link2").innerText = "Chapter 3: Cronus (Saturn)";
	document.getElementById("link2").href = "chap3.html#zeusMention";
}

function Poseidon() {
	document.getElementById("link1").innerText = "Chapter 21: Poseidon (Neptune)";
	document.getElementById("link1").href = "chap21.html#diogenes_4";
	document.getElementById("link2").innerText = "Chapter 3: Cronus (Saturn)";
	document.getElementById("link2").href = "chap3.html#zeusMention";
}

function Uranus() {
	document.getElementById("link1").innerText = "Chapter 2: Uranus AND Gaea (Coelus and Terra)";
	document.getElementById("link1").href = "chap2.html#diogenes_4";
	document.getElementById("link2").innerText = "Chapter 3: Cronus (Saturn)";
	document.getElementById("link2").href = "chap3.html#zeusMention";
}

// https://stackoverflow.com/questions/18410341/using-multiple-buttons-on-same-function-that-redirects-to-different-functions#18410383
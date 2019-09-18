function form2() {
	var nhi = document.formnhi.nhinumber;
	var nhiTest = /[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/;
	var valid = nhiTest.test(nhi.value);
	if (!valid) {
		window.alert("Invilad NHI number, valid numbers should be 3 letters then 4 numbers");
		event.preventDefault();
	}
	else if(document.formnhi.firstname.value == "" || document.formnhi.lastname.value == "" || document.formnhi.address.value == "") {
		window.alert("Fill out all the boxes");
		event.preventDefault();
	}
	else{
		return true;
	}
}

function bruhurls() {
    var bruhvariables = {};
    var bruhparts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
        m,
        key,
        value
    ) {
        bruhvariables[key] = value;
    });
    return bruhvariables;
}

function start() {
	var brunhi = bruhurls()["nhinumber"];
	document.getElementById("NHI").innerHTML = brunhi;
	var first = bruhurls()["firstname"];
	document.getElementById("first").innerHTML = first;
	var last = bruhurls()["lastname"];
	document.getElementById("last").innerHTML = last;
	var address = bruhurls()["address"];
	while(address.includes("+")){
		var address = address.replace("+"," ");
	}
	document.getElementById("address").innerHTML = address;
	var title = bruhurls()["title"];
	document.getElementById("title").innerHTML = title;
}

function calc1() {
	var total = 0;
	var resp = document.formcalc1.respiratory.value;
	var vent = document.formcalc1.vent.checked;
	var nerv = document.formcalc1.nervous.value;
	var card = document.formcalc1.cardiovascular.value;
	
	
	var drugs1 = document.formcalc1.drugs.value;
	
	
	var drug = document.formcalc1.drug.value;
	var liver = document.formcalc1.liver.value;
	
	var drugs2 = document.formcalc1.drugs2.value;
	
	var coag = document.formcalc1.coagulation.value;
	var kid = document.formcalc1.kidneys.value;
	
	var drugs3 = document.formcalc1.drugs3.value;
	
	if(resp != "") {
		if(resp < 100 && vent){
			total += 4;
		}
		else if(resp < 200 && vent){
			total += 3;
		}
		else if(resp < 300){
			total += 2;
		}
		else if(resp < 400){
			total += 1;
		}
	}
	
	if(nerv != "") {
		if(nerv == 15){
			total += 0;
		}
		else if(nerv >= 13){
			total += 1;
		}
		else if(nerv >= 10){
			total += 2;
		}
		else if(nerv >= 6){
			total += 3;
		}
		else if(nerv < 6){
			total += 4;
		}
	}
	
	if(card != "") {
		if(card > 70){
			total += 0;
		}
		else if(card < 70){
			total += 1;
		}
		else if((drug <= 5 && (drugs1 == "dopa")) || (drugs1 == "dupa")){
			total += 2;
		}
		else if((drug > 5 && (drugs1 == "dopa")) || (drug <= 0.1 && ((drugs1 == "epine") || (drugs1 == "noepine")))){
			total += 3;
		}
		else if((drug > 15 && (drugs1 == "dopa")) || (drug > 0.1 && ((drugs1 == "epine") || (drugs1 == "noepine")))){
			total += 4;
		}
	}
	
	if(liver != "") {
		if((liver < 1.2 && (drugs2 == "mgliver")) || (liver < 20 && (drugs2 == "molliver"))){
			total += 0;
		}
		else if((liver < 1.9 && (drugs2 == "mgliver")) || (liver < 32 && (drugs2 == "molliver"))){
			total += 1;
		}
		else if((liver < 5.9 && (drugs2 == "mgliver")) || (liver < 101 && (drugs2 == "molliver"))){
			total += 2;
		}
		else if((liver < 11.9 && (drugs2 == "mgliver")) || (liver < 204 && (drugs2 == "molliver"))){
			total += 3;
		}
		else if((liver > 12 && (drugs2 == "mgliver")) || (liver > 204 && (drugs2 == "molliver"))){
			total += 4;
		}
	}
	
	if(coag != "") {
		if(coag >= 150){
			total += 0;
		}
		else if(coag < 20){
			total += 4;
		}
		else if(coag < 50){
			total += 3;
		}
		else if(coag < 100){
			total += 2;
		}
		else if(coag < 150){
			total += 1;
		}
	}
	
	if(kid != "") {
		if((kid < 1.2 && (drugs3 == "mg")) || (kid < 110 && (drugs3 == "mol"))){
			total += 0;
		}
		else if((kid < 1.9 && (drugs3 == "mg")) || (kid < 170 && (drugs3 == "mol"))){
			total += 1;
		}
		else if((kid < 3.4 && (drugs3 == "mg")) || (kid < 299 && (drugs3 == "mol"))){
			total += 2;
		}
		else if((kid < 4.9 && (drugs3 == "mg")) || (kid < 440 && (drugs3 == "mol")) || (kid < 500 && (drugs3 == "urine"))){
			total += 3;
		}
		else if((kid > 5 && (drugs3 == "mg")) || (kid > 440 && (drugs3 == "mol")) || (kid < 200 && (drugs3 == "urine"))){
			total += 4;
		}
	}
	
	document.getElementById("total").value = total;
}

function calc2() {
	var total = 0;
	var pressure = document.formcalc2.pressure.value;
	var respiratory = document.formcalc2.respiratory.value;
	var mentation = document.formcalc2.mentation.value;
	
	if(pressure <= 100 && pressure != "") {
		total += 1;
	}
	if(respiratory >= 22 && respiratory != "") {
		total += 1;
	}
	if(mentation <= 14 && mentation != "") {
		total += 1;
	}
	document.getElementById("total2").value = total;
}
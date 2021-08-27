const nombre = document.querySelector("#input_name");
const form = document.querySelector("#greetings_form");
const edad = document.querySelector("#input_age");
form.addEventListener("submit",(event)=>{
	if(edad.value<=0){
		alert("Hola " + nombre.value + " sin edad");	
	}
	else{
		alert("Hola " + nombre.value + " " + edad.value);
	}

});

const nombre = document.querySelector("#input_name");
const form = document.querySelector("#greetings_form");

form.addEventListener("Submit",(event)=>{
	alert("Hola" + nombre.value);
});
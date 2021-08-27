const nombre = document.querySelector("#input_name");
const form = document.querySelector("#greetings_form");

form.addEventListener("submit",(event)=>{
	alert("Hola" + nombre.value);
});
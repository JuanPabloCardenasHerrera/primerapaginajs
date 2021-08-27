const nombre = document.querySelector("#input_name");
const form = document.querySelector("#greetings_form");
const edad = document.querySelector("#input_age");
form.addEventListener("submit",(event)=>{
	alert("Hola " + nombre.value + edad.value);
});
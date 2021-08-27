const nombre = document.querySelector("#input_name");
const form = document.querySelector("#greetings_form");
const edad = document.querySelector("#input_age");
const sexo = document.querySelector("#sex");
form.addEventListener("submit",(event)=>{
	const date=new Date();
	const horaDelDia = date.getHours();
	event.preventDefault();
	let formalidad = palabraFormal(edad.value,sexo.value);
	let saludo= saludoSegunHora(horaDelDia);
	alert(saludo + formalidad + nombre.value);
	
});

function palabraFormal(edad,sexo){
	let res=" ";
	if(edad<=0){
		res=" ";
	}
	if(edad>0 && edad<=15){
		if(sexo=="male"){
			return 	" ";
		}
		else{
			return " ";
		}	
	}
	if(edad>15 && edad<=30){
		if(sexo=="male"){
			return 	" Joven ";
		}
		else{
			return " Senorita ";
		}	
	}
	if(edad>30){
		if(sexo=="male"){
			return 	" Sr. ";
		}
		else{
			return " Sra. ";
		}	
	}
	return res;
}

function saludoSegunHora(hora){
	let res=" ";
	if(hora<5 || hora>=19){
		res="Buenas Noches";
	}
	if(hora>=12 && hora<19){
		res="Buenas Tardes";
	}
	if(hora>=5 && hora<12){
		res="Buenos Dias";
	}
	return res;
}
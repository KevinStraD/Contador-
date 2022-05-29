const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");


let numero = 0;

sumar.addEventListener("click", ()=>{
	numero++;
	contador.innerHTML = numero;
	if(numero>0){
		
		contador.style.color="green";
	}else if(numero<0){
		contador.style.color="red";
	}else{
		contador.style.color="blue";
	}

});

restar.addEventListener("click", ()=>{

{
		numero--;
		 contador.innerHTML = numero;
		 if(numero>0){
		contador.style.color="green";
	}else if(numero<0){
		contador.style.color="red";
	}else{
		contador.style.color="blue";
	}
		}

});

reset.addEventListener("click", ()=>{
	numero = 0;
	contador.innerHTML = numero;
	if(numero>0){
		contador.style.color="green";
	}else if(numero<0){
		contador.style.color="red";
	}else{
		contador.style.color="blue";
	}
});

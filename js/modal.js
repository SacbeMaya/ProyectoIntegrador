
let imagenes = document.querySelectorAll('.galeria-img'); /*Selector de css. todos los elementos con esta clase*/
let modal = document.querySelector('#modal'); /*Solo extrae un elemento*/

let sudadera1 = document.querySelector('#sudadera1'); /*Solo extrae un elemento*/
let sudadera2 = document.querySelector('#sudadera2'); /*Solo extrae un elemento*/
let sudadera3 = document.querySelector('#sudadera3'); /*Solo extrae un elemnto*/
let sudadera4 = document.querySelector('#sudadera4'); /*Solo extrae un elemnto*/
let sudadera5 = document.querySelector('#sudadera5'); /*Solo extrae un elemnto*/
let sudadera6 = document.querySelector('#sudadera6'); /*Solo extrae un elemnto*/
let btn = document.querySelector('#modal-btn');

for(let i =0; i < imagenes.length; i++){
	imagenes[i].addEventListener('click', function(){/*Pasamos el parametro*/
		
		modal.classList.toggle("modal-abrir");
		if(i==0){sudadera1.classList.toggle("modal-abrir");}
		if(i==1){sudadera2.classList.toggle("modal-abrir");}
		if(i==2){sudadera3.classList.toggle("modal-abrir");}
		if(i==3){sudadera4.classList.toggle("modal-abrir");}
		if(i==4){sudadera5.classList.toggle("modal-abrir");}
		if(i==5){sudadera6.classList.toggle("modal-abrir");}		
		
	});

}

btn.addEventListener('click', function(){
	modal.classList.remove("modal-abrir");
	sudadera1.classList.remove('modal-abrir');
	sudadera2.classList.remove('modal-abrir');
	sudadera3.classList.remove('modal-abrir');
	sudadera4.classList.remove('modal-abrir');
	sudadera5.classList.remove('modal-abrir');
	sudadera6.classList.remove('modal-abrir');
	
})
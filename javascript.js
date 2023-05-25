function proximo(){
	console.log(contador)
	var lblPrint = document.getElementById("lblPrint")
	lblPrint.innerHTML = vetorRegras[contador]
	contador++
	console.log(contador)	
}

function anterior(){
	contador = contador - 2
	console.log(contador)
	
	var lblPrint = document.getElementById("lblPrint")
	lblPrint.innerHTML = vetorRegras[contador]
	console.log(contador)
	contador++	
}

	
function contarCaracteres(cad) {
	return(cad.length);
}
function operar(num1,num2,cas) {
	num1=parseInt(num1);
	num2=parseInt(num2);
	cas=parseInt(cas);
	switch(cas) {
		case 1:
			return (num1+num2);
			break;
		case 2:
			return (num1-num2);
			break;
		case 3:
			return (num1*num2);
			break; 
		case 4:
			return (num1/num2);
			break;
		default:
			alert ("ERROR");
	}
}
function mayomen(num1,num2) {
	num1=parseInt(num1);
	num2=parseInt(num2);
	if (num1<num2) {
		return "num2"
	 }
	else{
		if (num1>num2) {
			return "num1"
		}
		else 
			if (num1==num2)
				return "ninguno, son iguales"
			else
				alert("ERROR")
	}
}
function media() {
	let meda1=0;
	let cont1=0,cont2=0;
	let meda2=0;
	let edad;
	let altura;
	do {
		edad = prompt("Introduce E para salir | Introduce la edad");
		altura =prompt("Introduce una E para salir | Introduce la altura");
		if(edad!="E" && altura!="E"){
			edad=parseInt(edad);
			altura=parseInt(altura);
			document.write("Edad: "+edad+" -- altura: "+altura+'<br>')
			if (edad>=13 && edad<=16) {
				meda1=altura+meda1;
				cont1++;
			}
			else if (edad>=16&&edad<=20) {
					meda2=altura+meda2;
					cont2++;
				}
			else
				alert("ERROR")
		}
	} while (edad!="E"&&altura!="E")
	document.write("Media de 13 a 16 años: "+(meda1/cont1)+"en "+ cont1+" alumnos<br>");
	document.write("Media de 16 a 20 años: "+(meda2/cont2)+"en "+ cont1+" alumnos");
}
function factorial(num) {
	let i = 0;
	let res = 1;
	res=num;
	for (i=1 ; i<num ;i++) {
		res=res*i;
	}
	return(res)
}
function potencia(num,exp) {
	let i = 0;
	let res = 0;
	res = num;
	for (i=1 ; i<exp ;i++) {
		res=res*num;
	}
	return(res)
}
function divisa(div,mon) {
	res = 0;
	switch(div) {
		case "Dolares":{
			res=mon*0.9914;
			return(res);
		}
			break;
		case "Libra": {
			res=mon*1.16;
			return(res);
		}
			break;
		case "Yuanes": {
			res=mon*7.238;
			return(res);
		}
			break; 
		case "Yenes": {
			res=mon*1.16;
			return(res);
		}
			break;
		default:
			alert ("ERROR");
	}
}

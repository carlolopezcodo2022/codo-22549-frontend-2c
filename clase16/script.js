//primero creo la funcion
function calcularNotas() {
    //tomar los datos de los input ?
    //const inputNota1 = document.getElementById("nota1");
    //const valorNota1 = inputNota1.value;

    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    //crear el vector de notas
    const notas = [];

    //carga un vector
    //1 - nombreVector[indice]=valor;
    notas[0] = parseInt(nota1);
    notas[1] = +nota2;
    
    //ahora trabajo con el vector
    //recorrer el vector
    let menor = notas[0];
    let mayor = notas[0];
    let promedio;
    let suma = 0;
    for(let i=0;i<notas.length;i++) {
        //calculo el menor
        if(notas[i] < menor)  {
            menor = notas[i];
        }
        //calcular el mayor
        if(notas[i] > mayor)  {
            mayor = notas[i];
        }
        //sumo las notas
        suma = suma + notas[i];
    }

    //ahora que tengo el la suma de las notas, calculo el promedio
    promedio = suma / notas.length;

    //mustro los datos
    console.log(menor);
    console.log(mayor);
    console.log(promedio);
}
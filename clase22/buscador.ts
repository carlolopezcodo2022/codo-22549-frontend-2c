/*ts superspet de js*/
/*O.O.P*/
/*
    clases,interfaces,clases abstractas    
 */

/*clase*/
class Articulo {
  titulo:string; 
  autor:string;
  precio:number;
}

class Buscador {
    //atributos
    claveBusqueda: string;
    articulos: Articulo[];

    //metodos
    buscar(): void {
        console.log(`buscando con la clave ${this.claveBusqueda}`);
    }
}

//definir un tipo de objeto
interface Producto {
    id: number,
    nombre: string,
}

interface Producto1 {
    buscar(): void;
}

const algo:Producto = {
    id: 1,
    nombre: '',
};

function comprar(prod:Producto): void{
    
}

//invoke
const unP:Producto = {
    id:1,
    nombre:'papel'
};

comprar(unP);
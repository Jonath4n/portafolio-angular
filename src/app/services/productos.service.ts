import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';
import { Pdescripcion } from '../interfaces/producto-descripcion.interface';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[]=[];
  productosFiltro: Producto[] =[];
  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-htmls-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp: any) => {
        this.productos = resp;
        this.cargando = false;
        resolve(); //La promesa termino efectivamente
      });
    });
  }

  Getproductos(id: string){
   return this.http.get('https://angular-htmls-default-rtdb.firebaseio.com/productos/'+id+'.json');

  }

  BuscarProducto(termino: string){


      if (this.productos.length === 0) {
        //cargando productos
        this.cargarProductos().then( ()=> {
          //Ejecutar despues de tener los productos
          //Aplicar el filtro
          this.FilrtrarProductos( termino );
        });

      } else {
        //Aplicar el filtro
        this.FilrtrarProductos( termino );
      }

    }

  private FilrtrarProductos(termino: string){
    //Ejecutar cuando siempre haya productos
    console.log(this.productos);
    this.productosFiltro = [];
    termino = termino.toLowerCase();
    this.productos.forEach( prod => {

        const titulolower =  prod.titulo?.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >=0 || titulolower.indexOf( termino ) >=0) {
          this.productosFiltro.push( prod );
      }
    });
  }
}

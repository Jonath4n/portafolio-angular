import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';
import { Pdescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[]=[];
  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos(){

    this.http.get('https://angular-htmls-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp: any) => {
      this.productos = resp;
      this.cargando = false;
    });
  }

  Getproductos(id: string){
   return this.http.get('https://angular-htmls-default-rtdb.firebaseio.com/productos/'+id+'.json');

  }
}

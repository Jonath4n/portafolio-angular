import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';

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
      //resp = this.productos;
      console.log(resp);
      this.productos = resp;
      this.cargando = false;
    });
  }
}

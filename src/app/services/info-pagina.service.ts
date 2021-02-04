import { InfoPagina } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[]= [];
  constructor( private http: HttpClient ) {

    //console.log('servicio de info pagina listo');
    this.cargarInfo();
    this.cargarEquipo();
    //Leer archivo JSON
  }


  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;

    });
  }

  private cargarEquipo(){

    this.http.get('https://angular-htmls-default-rtdb.firebaseio.com/equipo.json').subscribe( (resp: any) => {
      this.equipo = resp;
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private Router: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit(): void {

    this.Router.params.subscribe( params => {

      //console.log(params['termino']);
      this.productosService.BuscarProducto(params['termino']);

    });
  }

}

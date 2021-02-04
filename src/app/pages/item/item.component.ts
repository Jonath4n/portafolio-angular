import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Pdescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: Pdescripcion = {};
  id: any;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) {
    this.route.params.subscribe(parametros => {
      //console.log(parametros['id']);
      this.productosService.Getproductos(parametros['id']).subscribe( (producto: Pdescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;

        //console.log(parametros['id']);
      });
    });
   }

  ngOnInit(): void {



  }

}

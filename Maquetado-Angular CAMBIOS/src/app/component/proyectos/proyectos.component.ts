import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/service/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miPortfolio:any;

  constructor(private datosPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(
      data => {
        this.miPortfolio=data;
    });
  }
}



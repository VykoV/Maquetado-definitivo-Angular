import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/service/porfolio.service';



@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  miPortfolio:any;

  constructor(private datosPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(
      data => {
        this.miPortfolio=data;
    });
  }
}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css'],
})
export class DeportesComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  deportes: any = [
    {
      id:8,
      nombre:"Balon Futtre ",
      precio: 250,
      imagen: 'assets/imagenes/futtre1.jpg',
      reviews: [
        'De los mejores balones de futbol','Muy lindo balon'
      ]
    },
    {
      id:9,
      nombre:"Balon Futtre",
      precio: 100,
      imagen: 'assets/imagenes/futtre2.jpg',
      reviews: [
        'Lo barato sale caro. No aguanto ni una reta','Muy malo, parece una pelota'
      ]
    },
  ];
  carro:number=0;
  agregarCarrito(){
    this.carro++;
  }
}


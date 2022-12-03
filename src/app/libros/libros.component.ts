import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  libros: any = [
    {
      id:21,
      nombre:"libro novela ",
      precio: 1000,
      imagen: 'assets/imagenes/libro1.jpg',
      reviews: [
        'Un gran libro','Lastimosamente su calidad ya no es buena en la actualidad'
      ]
    },
    
    {
      id:22,
      nombre:"libro aventura",
      precio: 1500,
      imagen: 'assets/imagenes/libro2.jpg',
      reviews: [
        'Grandioso','Me encanto'
      ]
    }
  ];
  carro:number=0;
  agregarCarrito(){
    this.carro++;
  }
}


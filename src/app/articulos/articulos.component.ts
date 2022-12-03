import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  articulos: any = [
    {
      id:1,
      nombre:"Audifonos",
      precio: 200,
      imagen: 'assets/imagenes/audifono1.jpg',
      reviews: [
        'Muy buenos audifonos. Me funcionaron perfectamente','El vendedor no me quiso realizar la devolucion, pesimo serivico'
      ]
    },
    {
      id:2,
      nombre:"Audifonos",
      precio: 100,
      imagen: 'assets/imagenes/audifono2.jpg',
      reviews: [
        'Interesante.Muy practicos','Muy buenos'
      ]
    },
    
    {
      id:4,
      nombre:"MacBook",
      precio: 15000,
      imagen: 'assets/imagenes/computadora.jpg',
      reviews: [
        'Un poco lenta','Buena eleccion'
      ]
    },
    {
      id:5,
      nombre:"Computadora de escritorio",
      precio: 12000,
      imagen: 'assets/imagenes/computadora2.jpg',
      reviews: [
        'Muy buena computadora','El empaque llego muy lastimado'
      ]
    },
    
    {
      id:8,
      nombre:"Balon futtre",
      precio: 250,
      imagen: 'assets/imagenes/futtre1.jpg',
      reviews: [
        'De los mejores balones de futbol','Muy lindo balon'
      ]
    },
    {
      id:9,
      nombre:"Balon futtre",
      precio: 100,
      imagen: 'assets/imagenes/futtre2.jpg',
      reviews: [
        'Lo barato sale caro. No aguanto ni una reta','Muy malo, parece una pelota'
      ]
    },
    {
      id:10,
      nombre:"Laptop",
      precio: 10000,
      imagen: 'assets/imagenes/laptop1.jpg',
      reviews: [
        'Buena','Muy mala'
      ]
    },
    {
      id:11,
      nombre:"Laptop ",
      precio: 5000,
      imagen: 'assets/imagenes/laptop2.png',
      reviews: [
        'excelente','Para ser reacondicionada, es excelente'
      ]
    },
    {
      id:12,
      nombre:"Laptop ",
      precio: 15000,
      imagen: 'assets/imagenes/laptop3.jpg',
      reviews: [
        'Muy mala','Veremos que tal funciona'
      ]
    },
   
    {
      id:14,
      nombre:"Celular MOTOROLA ",
      precio: 1500,
      imagen: 'assets/imagenes/motorola.jpg',
      reviews: [
        'La bateria le dura mas de 8 horas en uso','Muy buen celular'
      ]
    },
    {
      id:15,
      nombre:"PSP",
      precio: 2000,
      imagen: 'assets/imagenes/psp.png',
      reviews: [
        'La nostalgia me invadio','Me trae muy buenos recuerdos'
      ]
    },
    {
      id:16,
      nombre:"Reloj ",
      precio: 2000,
      imagen: 'assets/imagenes/reloj2.jpg',
      reviews: [
        'Excelente reloj','El envio llego muy tarde. Mal servicio'
      ]
    },
    {
      id:18,
      nombre:"Samsung Grand Prime",
      precio: 1000,
      imagen: 'assets/imagenes/samsung1.jpg',
      reviews: [
        'Un celular muy antiguo','Lastimosamente su calidad ya no es buena en la actualidad'
      ]
    },
    
    {
      id:20,
      nombre:"XBOX ONE",
      precio: 4000,
      imagen: 'assets/imagenes/xboxone.jpg',
      reviews: [
        'Grandioso','Me encanto'
      ]
    },
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


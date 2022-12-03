import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { ArticulosComponent } from './articulos/articulos.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ElectronicosComponent } from './electronicos/electronicos.component';
import { DeportesComponent } from './deportes/deportes.component';
import { LibrosComponent } from './libros/libros.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ArticulosComponent,
    FooterComponent,
    InicioComponent,
    ArticuloDetalleComponent,
    CarritoComponent,
    ElectronicosComponent,
    DeportesComponent,
    LibrosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

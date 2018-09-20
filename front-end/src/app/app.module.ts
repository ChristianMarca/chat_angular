import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IngresoComponent } from './componente/ingreso/ingreso.component';
import { MensajeriaComponent } from './componente/mensajeria/mensajeria.component';
import {RestApiService} from './servicio/rest-api.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    MensajeriaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

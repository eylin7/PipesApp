import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


//Copnfiguracion del local de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localFrCA from '@angular/common/locales/fr'

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHN);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [
     //ESTABLECE EL IDIOMA EN TODA LA APLICACION
    { provide: LOCALE_ID, useValue: 'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

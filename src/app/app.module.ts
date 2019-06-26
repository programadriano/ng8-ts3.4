import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplocostassertionsService } from './services/exemplocostassertions.service';
import { ExemplonamedparametersService } from './services/exemplonamedparameters.service';
import { ExemploreadonlyService } from './services/exemploreadonly.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExemplocostassertionsService, ExemplonamedparametersService, ExemploreadonlyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

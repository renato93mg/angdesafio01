import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { IzquierdaComponent } from './izquierda/izquierda.component';
import { DerechaComponent } from './derecha/derecha.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SectionComponent,
    IzquierdaComponent,
    DerechaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

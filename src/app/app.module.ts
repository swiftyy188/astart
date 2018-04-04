import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstartComponent } from './astart/astart.component';
import { CallbackComponent } from './callback.component';


@NgModule({
  declarations: [
    AppComponent,
    AstartComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

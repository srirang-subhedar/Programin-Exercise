import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot()

  ],
  providers: [
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

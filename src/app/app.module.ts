import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TitlebarComponent } from './layout/titlebar/titlebar.component';


@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

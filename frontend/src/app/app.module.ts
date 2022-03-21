import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoveCalcComponent } from './components/love-calc/love-calc.component';
import { LoveService } from './services/love.service';

@NgModule({
  declarations: [
    AppComponent,
    LoveCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

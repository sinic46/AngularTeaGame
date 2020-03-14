import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuesDisplayComponent } from './values-display/values-display.component';
import { GetTeaLeavesComponent } from './get-tea-leaves/get-tea-leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuesDisplayComponent,
    GetTeaLeavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

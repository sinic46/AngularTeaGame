import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuesDisplayComponent } from './values-display/values-display.component';
import { GetTeaLeavesComponent } from './get-tea-leaves/get-tea-leaves.component';
import { TeaGameComponent } from './tea-game/tea-game.component';
import { MainButtonsComponent } from './main-buttons/main-buttons.component';
import { TeabagGeneratorsComponent } from './tea-game/teabag-generators/teabag-generators.component';
import { MarketDeptComponent } from './market-dept/market-dept.component';
import { EngineerDeptComponent } from './engineer-dept/engineer-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuesDisplayComponent,
    GetTeaLeavesComponent,
    TeaGameComponent,
    MainButtonsComponent,
    TeabagGeneratorsComponent,
    MarketDeptComponent,
    EngineerDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

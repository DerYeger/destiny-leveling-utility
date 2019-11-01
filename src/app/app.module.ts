import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModelService} from './model/model.service';
import {FormsModule} from '@angular/forms';
import {CharacterModule} from './character/character.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CharacterModule
  ],
  providers: [ModelService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TitleComponent } from './title/title.component';
import { BodyCardComponent } from './body-card/body-card.component';
import { FooterCardComponent } from './footer-card/footer-card.component';
import {CardService} from './card/card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitleComponent,
    BodyCardComponent,
    FooterCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

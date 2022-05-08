import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponentComponent } from './top-menu-component/top-menu-component.component';
import { TimeLineComponentComponent } from './time-line-component/time-line-component.component';
import { ChatComponent } from './chat/chat.component';
import { AcceuilComponentComponent } from './acceuil-component/acceuil-component.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommentaireComponent } from './commentaire/commentaire.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponentComponent,
    TimeLineComponentComponent,
    ChatComponent,
    AcceuilComponentComponent,
    FooterComponent,
    CommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

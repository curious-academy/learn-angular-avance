import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { RappelPromiseComponent } from './learnings/rappel-promise-observable/rappel-promise.component';
import { FromEventOperatorComponent } from './learnings/from-event-operator/from-event-operator.component';
import { FormsModule } from '@angular/forms';
import { SubjectAndCoComponent } from './learnings/subject-and-co/subject-and-co.component';
import { SubjectWithTakeuntilComponent } from './learnings/subject-with-takeuntil/subject-with-takeuntil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SubjectAndCoComponent,
    SubjectWithTakeuntilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GameModule,
    FromEventOperatorComponent
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }

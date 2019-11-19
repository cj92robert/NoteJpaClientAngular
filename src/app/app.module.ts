import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteComponent } from './componets/note/note.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

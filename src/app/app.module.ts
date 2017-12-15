import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgChatModule } from 'ng-chat';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StoreProvioder} from './StoreFactory';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,TodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [StoreProvioder],
  bootstrap: [AppComponent]
})
export class AppModule { }

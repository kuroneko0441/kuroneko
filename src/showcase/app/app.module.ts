import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ButtonModule,
  DialogModule,
  DropdownModule,
  InputModule,
  MenuModule,
  PaginatorModule,
  PanelModule,
  ProgressModule,
  TabModule,
} from 'kuroneko';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputModule,
    MenuModule,
    TabModule,
    PaginatorModule,
    PanelModule,
    ProgressModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}

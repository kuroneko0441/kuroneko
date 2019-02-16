import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    ButtonModule,
    InputModule,
} from 'kuroneko';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        InputModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {}

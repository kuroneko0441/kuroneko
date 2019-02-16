import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    ButtonModule,
    DropdownModule,
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
        DropdownModule,
        InputModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {}

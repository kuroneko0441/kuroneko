import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputModule,
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
        TabModule,
        ProgressModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {}

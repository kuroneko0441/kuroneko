import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    ButtonModule,
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
        AppRoutingModule,
        ButtonModule,
        DropdownModule,
        InputModule,
        TabModule,
        ProgressModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {}

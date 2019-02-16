import { Component } from '@angular/core';

@Component({
    selector: 'kns-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
    public defaultButtonEvent: string = '';
    public disabledButtonEvent: string = '';

    public logEvent(event: Event): void {
        console.warn(`event ${event.type}`, event);
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'kns-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
    public defaultButtonEvent: string = '';
    public disabledButtonEvent: string = '';
    public defaultInputValue: string = '';
    public multilineInputValue: string = '';
    public fixedMultilineInputValue: string = '';

    public get defaultInputValueParsed(): string {
        return JSON.stringify(this.defaultInputValue);
    }

    public get multilineInputValueParsed(): string {
        return JSON.stringify(this.multilineInputValue);
    }

    public get fixedMultilineInputValueParsed(): string {
        return JSON.stringify(this.fixedMultilineInputValue);
    }

    public logEvent(event: Event): void {
        console.warn(`event ${event.type}`, event);
    }
}

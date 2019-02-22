import { Component } from '@angular/core';
import { KNDropdownModel } from 'kuroneko';

@Component({
    selector: 'kns-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
    public primaryButtonEvent: string = '';
    public lightButtonEvent: string = '';
    public darkButtonEvent: string = '';
    public disabledButtonEvent: string = '';
    public defaultInputValue: string = '';
    public multilineInputValue: string = '';
    public fixedMultilineInputValue: string = '';
    public dropDownOptions: KNDropdownModel[] = [
        new KNDropdownModel('loooooooooong label1', 'string value 1'),
        new KNDropdownModel('label2', true),
        new KNDropdownModel('label3', { value: 'object value' }),
        new KNDropdownModel('label4', 4),
    ];
    public defaultDropDownValue: KNDropdownModel;
    public defaultDropDownOpened: boolean;
    public disabledDropDownValue: KNDropdownModel;
    public disabledDropDownOpened: boolean;
    public dialogVisible: boolean = false;
    public paginatorFirstPage: number = 1;
    public paginatorLastPage: number = 10;
    public paginatorSidePages: number = 2;
    public paginatorPage: number = this.paginatorFirstPage;

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

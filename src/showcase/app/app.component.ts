import { Component } from '@angular/core';
import { KNDropdownModel } from 'kuroneko';
import { KNMenuModel } from '../../kuroneko/src/menu/types';

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
  public dropDownOptions: KNDropdownModel<any>[] = [
    new KNDropdownModel('loooooooooong label1', 'string value 1'),
    new KNDropdownModel('label2', true),
    new KNDropdownModel('label3', { value: 'object value' }),
    new KNDropdownModel('label4', 4),
  ];
  public defaultDropDownValue: KNDropdownModel<any>;
  public disabledDropDownValue: KNDropdownModel<any>;
  public dialogVisible: boolean = false;
  public menuResult: string = '';
  public menuModel: KNMenuModel[] = [
    {
      label: 'Init new Repository',
      items: [
        {
          label: 'Repo 1',
          shortcut: 'Ctrl + N + 1',
          items: [],
          callback: (): void => {
            this.menuResult = 'menu1-1';
          },
        },
        {
          label: 'Repo 2',
          shortcut: 'Ctrl + N + 2',
          items: [],
          callback: (): void => {
            this.menuResult = 'menu1-2';
          },
        },
      ],
      callback: (): void => {
        this.menuResult = 'menu1';
      },
    },
    {
      label: 'Clone',
      shortcut: 'Ctrl + D',
      items: [],
      callback: (): void => {
        this.menuResult = 'menu2';
      },
    },
    {
      label: 'New Tab',
      items: [
        {
          label: 'tab1',
          shortcut: 'Ctrl + T + 1',
          items: [],
          callback: (): void => {
            this.menuResult = 'menu3-1';
          },
        },
        {
          label: 'tab2',
          shortcut: 'Ctrl + T + 2',
          items: [],
          callback: (): void => {
            this.menuResult = 'menu3-2';
          },
        },
      ],
      callback: (): void => {
        this.menuResult = 'menu3';
      },
    },
  ];
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
}

import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { KNDropdownModel } from './types';

@Component({
    selector: 'kn-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: [ './dropdown.component.scss' ],
})
export class DropdownComponent implements OnInit, OnDestroy {
    @Input() public options: KNDropdownModel[] = [];

    @Input()
    public get ngModel(): KNDropdownModel {
        return this._ngModel;
    }

    public set ngModel(value: KNDropdownModel) {
        this._ngModel = value;
        this.ngModelChange.emit(this._ngModel);
    }

    @Input()
    public get disabled(): boolean {
        if (typeof this._disabled === 'string') {
            if (this._disabled === 'true') {
                return true;
            } else if (this._disabled === 'false') {
                return false;
            }
        }

        return this._disabled;
    }

    public set disabled(value: boolean) {
        this._disabled = value;
    }

    @Input()
    public get opened(): boolean {
        if (typeof this._opened === 'string') {
            if (this._opened === 'true') {
                return true;
            } else if (this._opened === 'false') {
                return false;
            }
        }

        return this._opened;
    }

    public set opened(value: boolean) {
        if (this._opened !== value) {
            this._opened = value;
            this.openedChange.emit(this._opened);
        }
    }

    @Output() public ngModelChange: EventEmitter<KNDropdownModel> = new EventEmitter<KNDropdownModel>();
    @Output() public openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public get ngSelectorClass(): any {
        return {
            opened: this.opened,
            disabled: this.disabled,
        };
    }

    private _ngModel: KNDropdownModel;
    private _disabled: boolean = false;
    private _opened: boolean = false;

    public constructor(
        private elementRef: ElementRef,
    ) {}

    public ngOnInit(): void {
        document.addEventListener('mousedown', (event: MouseEvent) => this.onMouseDown(event));
    }

    public ngOnDestroy(): void {
        document.removeEventListener('mousedown', (event: MouseEvent) => this.onMouseDown(event));
    }

    public onMouseDown(event: MouseEvent): void {
        if ((event.target as HTMLElement).closest('kn-dropdown') === this.elementRef.nativeElement) {

        } else {
            this.opened = false;
        }
    }

    public onSelectorClick(event: MouseEvent): void {
        this.opened = !this.opened;
    }

    public onOptionClick(event: MouseEvent, option: KNDropdownModel): void {
        this.ngModel = option;
        this.opened = false;
    }
}

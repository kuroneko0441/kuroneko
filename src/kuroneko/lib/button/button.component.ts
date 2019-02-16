import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'kn-button',
    templateUrl: './button.component.html',
    styleUrls: [ './button.component.scss' ],
})
export class ButtonComponent {
    @Input()
    public get disabled(): boolean {
        return this._disabled;
    }

    public set disabled(value: boolean) {
        if (typeof value === 'string') {
            if (value === 'true') {
                this._disabled = true;
            } else if (value === 'false') {
                this._disabled = false;
            }
        }

        this._disabled = value;
    }

    @Output() public blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
    @Output() public click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
    @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

    public get ngClass(): any {
        return {
            disabled: this.disabled,
        };
    }

    private _disabled: boolean;

    public onButtonClick(event: MouseEvent): void {
        event.stopImmediatePropagation();
        event.stopPropagation();

        this.click.emit(event);
    }

    public onButtonFocus(event: FocusEvent): void {
        event.stopImmediatePropagation();
        event.stopPropagation();

        this.focus.emit(event);
    }

    public onButtonBlur(event: FocusEvent): void {
        event.stopImmediatePropagation();
        event.stopPropagation();

        this.blur.emit(event);
    }
}

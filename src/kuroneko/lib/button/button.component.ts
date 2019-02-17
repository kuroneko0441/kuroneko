import {
    Component,
    HostBinding,
    Input,
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

    @Input() public color: string = '';

    @HostBinding('class.disabled')
    public get hostDisabled(): boolean {
        return this.disabled;
    }

    @HostBinding('class.color--light')
    public get hostClassLight(): boolean {
        return this.color === 'light';
    }

    @HostBinding('class.color--primary')
    public get hostClassPrimary(): boolean {
        return !this.hostClassDark && !this.hostClassLight;
    }

    @HostBinding('class.color--dark')
    public get hostClassDark(): boolean {
        return this.color === 'dark';
    }

    @HostBinding('tabindex')
    public get hostTabindex(): number {
        return this.disabled ? -1 : 1;
    }

    private _disabled: boolean;
}

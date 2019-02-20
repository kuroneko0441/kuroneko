import {
    Component,
    HostBinding,
    Input,
} from '@angular/core';

@Component({
    selector: 'kn-progress',
    templateUrl: './progress.component.html',
    styleUrls: [ './progress.component.scss' ],
})
export class ProgressComponent {
    @Input() public value: number = 0;
    @Input() public height: number = 30;

    @Input()
    public get label(): boolean {
        if (typeof this._label === 'string') {
            if (this._label === 'true') {
                return true;
            } else if (this._label === 'false') {
                return false;
            }

            return this._label;
        }
    }

    public set label(value: boolean) {
        if (this._label !== value) {
            this._label = value;
        }
    }

    @Input()
    public get striped(): boolean {
        if (typeof this._striped === 'string') {
            if (this._striped === 'true') {
                return true;
            } else if (this._striped === 'false') {
                return false;
            }

            return this._striped;
        }
    }

    public set striped(value: boolean) {
        if (this._striped !== value) {
            this._striped = value;
        }
    }

    @Input()
    public get animated(): boolean {
        if (typeof this._animated === 'string') {
            if (this._animated === 'true') {
                return true;
            } else if (this._animated === 'false') {
                return false;
            }

            return this._animated;
        }
    }

    public set animated(value: boolean) {
        if (this._animated !== value) {
            this._animated = value;
        }
    }

    @HostBinding('style.font-size.px')
    public get hostStyleFontSizePx(): number {
        return this.height / 2;
    }

    public get progressFilledNgClass(): any {
        return {
            striped: this.striped,
            animated: this.animated,
        };
    }

    private _label: boolean = false;
    private _striped: boolean = false;
    private _animated: boolean = false;
}

import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import {
    Component,
    HostBinding,
    Input,
    TemplateRef,
} from '@angular/core';

@Component({
    selector: 'kn-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: [ './dialog.component.scss' ],
    animations: [
        trigger('dialogAnimation',
            [
                state(
                    'opened',
                    style({
                        opacity: 100,
                        display: 'flex',
                    }),
                ),
                state(
                    'closed',
                    style({
                        opacity: 0,
                        display: 'none',
                    }),
                ),
                transition(
                    'closed => opened',
                    [
                        style({
                            opacity: 0,
                            display: 'flex',
                        }),
                        animate('300ms cubic-bezier(0.645, 0.045, 0.355, 1)'),
                    ],
                ),
            ]),
    ],
})
export class DialogComponent {
    @Input() public dialogTemplate: TemplateRef<any>;

    @Input()
    public get visible(): boolean {
        if (typeof this._visible === 'string') {
            if (this._visible === 'true') {
                return true;
            } else if (this._visible === 'false') {
                return false;
            }
        }

        return this._visible;
    }

    public set visible(value: boolean) {
        this._visible = value;
    }

    @HostBinding('@dialogAnimation')
    public get hostDialogAnimation(): any {
        return {
            value: this.visible ? 'opened' : 'closed',
        };
    }

    private _visible: boolean = false;
}

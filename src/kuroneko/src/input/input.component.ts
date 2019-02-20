import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'kn-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
})
export class InputComponent {
    @Input()
    public get ngModel(): string {
        return this._ngModel;
    }

    public set ngModel(value: string) {
        let _value = value;

        if (typeof value !== 'string') {
            _value = String(value);
        }

        if (this._ngModel === _value) {
            return;
        }

        if (this.lastEventValue !== _value) {
            if (this.multiline) {
                this.inputRef.nativeElement.innerHTML = decodeURIComponent(encodeURIComponent(_value)
                    .split(encodeURI('\n'))
                    .map((s, i) => {
                        if (s.length === 0) {
                            return '<div><br></div>';
                        } else {
                            return i > 0 ? `<div>${s}</div>` : s;
                        }
                    })
                    .join(''));
            } else {
                _value = _value.replace(/\n/g, '');

                this.inputRef.nativeElement.innerText = _value;
            }

            this.lastEventValue = _value;
        }

        this._ngModel = _value;
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
    public get multiline(): boolean {
        if (typeof this._multiline === 'string') {
            if (this._multiline === 'true') {
                return true;
            } else if (this._multiline === 'false') {
                return false;
            }
        }

        return this._multiline;
    }

    public set multiline(value: boolean) {
        this._multiline = value;
    }

    @Input()
    public get placeholder(): string {
        if (typeof this._placeholder !== 'string') {
            return String(this._placeholder);
        }

        return this._placeholder;
    }

    public set placeholder(value: string) {
        this._placeholder = value;
    }

    @Output() public ngModelChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() public click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
    @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
    @Output() public blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

    @ViewChild('inputRef') private inputRef: ElementRef<HTMLDivElement>;

    public get ngClass(): any {
        return {
            multiline: this.multiline,
            disabled: this.disabled,
        };
    }

    private _ngModel: string = '';
    private _multiline: boolean = false;
    private _disabled: boolean = false;
    private _placeholder: string = '';
    private lastEventValue: string = '';

    public constructor() {}

    public onInput(event: Event): void {
        let parsedValue = this.inputRef.nativeElement.innerHTML;

        if (parsedValue.includes('<div>')) {
            parsedValue = parsedValue
                .replace(/^<div><br><\/div>/, '')
                .replace(/(<br>|<\/div>)/g, '')
                .replace(/<div>/g, '\n');
        } else {
            parsedValue = parsedValue
                .replace(/^<br>/, '')
                .replace(/<br>/g, '\n');
        }

        this.lastEventValue = parsedValue;
        this.ngModel = this.lastEventValue;
    }

    public onKeyupdown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && !this.multiline) {
            event.preventDefault();

            const element = this.inputRef.nativeElement;
            const selection = document.getSelection();

            if (selection.baseNode === element.firstChild && selection.baseOffset !== selection.focusOffset) {
                const startIndex = selection.baseOffset < selection.focusOffset ? selection.baseOffset : selection.focusOffset;
                const endIndex = selection.focusOffset < selection.baseOffset ? selection.baseOffset : selection.focusOffset;

                const innerText = element.innerText;

                element.innerText = innerText.slice(0, startIndex) + innerText.slice(endIndex, innerText.length);

                if (element.childNodes.length > 0) {
                    const newRange = document.createRange();
                    newRange.setStart(element.firstChild, startIndex);

                    selection.removeAllRanges();
                    selection.addRange(newRange);
                }
            }
        }
    }

    public onClick(event: MouseEvent): void {
        event.stopImmediatePropagation();
        event.stopPropagation();

        this.click.emit(event);
    }

    public onFocus(event: FocusEvent): void {
        event.stopImmediatePropagation();
        event.stopPropagation();

        this.focus.emit(event);
    }

    public onBlur(event: FocusEvent): void {
        event.stopImmediatePropagation();
        event.stopPropagation();

        this.blur.emit(event);
    }
}

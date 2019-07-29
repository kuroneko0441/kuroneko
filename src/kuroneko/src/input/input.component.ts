import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'kn-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  @HostBinding('attr.multiline')
  public multiline: boolean = false;

  @Input()
  public placeholder: string;

  @Input()
  public disabled: boolean = false;

  @ViewChild('inputRef')
  public inputRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  public get ngModel(): string {
    return this.ngControl !== null ? this.ngControl.control.value : '';
  }

  public set ngModel(value: string) {
    if (typeof this.onChange === 'function') {
      this.onChange(value);
    }
  }

  public get ngClass(): any {
    return {
      multiline: this.multiline,
      disabled: this.disabled,
    };
  }

  @HostBinding('class.focused')
  public hostClassFocused: boolean = false;

  private onChange: (event: string) => any;
  private onTouched: (event: FocusEvent) => any;

  public constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    @Optional()
    private readonly ngControl: NgControl,
  ) {
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }

  public onFocus(event: FocusEvent): void {
    this.hostClassFocused = true;
  }

  public onBlur(event: FocusEvent): void {
    this.hostClassFocused = false;

    if (typeof this.onTouched === 'function') {
      this.onTouched(event);
    }
  }

  public onInput(event: Event): void {
    this.ngModel = this.inputRef.nativeElement.value;

    if (this.multiline) {
      this.inputRef.nativeElement.style.overflow = 'hidden';
      this.inputRef.nativeElement.style.height = 'auto';
      this.inputRef.nativeElement.style.height = `${this.inputRef.nativeElement.scrollHeight}px`;
    }
  }

  public registerOnChange(onChange: (event: string) => any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: (event: FocusEvent) => any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(value: string): void {
    this.changeDetectorRef.detectChanges();
  }
}

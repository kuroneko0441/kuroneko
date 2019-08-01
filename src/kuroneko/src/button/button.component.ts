import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
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
  @Input() public icon: string = '';
  @Input() public iconPos: string = '';

  @ViewChild('label', { static: true }) public labelRef: ElementRef<HTMLSpanElement>;

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

  @HostBinding('class.color--minimal')
  public get hostClassMinimal(): boolean {
    return this.color === 'minimal';
  }

  @HostBinding('class.color--text')
  public get hostClassText(): boolean {
    return this.color === 'text';
  }

  @HostBinding('tabindex')
  public get hostTabindex(): number {
    return this.disabled ? -1 : 1;
  }

  public get iconClass(): any {
    return {
      'left-icon': this.iconPos !== 'right' && !this.emptyLabel,
      'right-icon': this.iconPos === 'right' && !this.emptyLabel,
      'center-icon': this.emptyLabel,
    };
  }

  public get spanClass(): any {
    return {
      'no-icon': this.icon === '',
      'empty': this.emptyLabel,
    };
  }

  public get emptyLabel(): boolean {
    return this.labelRef ? this.labelRef.nativeElement.innerText === '' : false;
  }

  private _disabled: boolean;
}

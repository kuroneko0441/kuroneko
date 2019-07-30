import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';
import { KNDropdownModel } from './types';

@Component({
  selector: 'kn-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: [ './dropdown.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input()
  public options: KNDropdownModel[] = [];

  @Input()
  public disabled: boolean;

  @Output()
  public ngModelChange: EventEmitter<KNDropdownModel> = new EventEmitter<KNDropdownModel>();

  @Output()
  public openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public get ngModel(): KNDropdownModel {
    return this.ngControl.control.value;
  }

  public set ngModel(value: KNDropdownModel) {
    if (typeof this.onChange === 'function') {
      this.onChange(value);
    }
  }

  public get selectorClass(): any {
    return {
      opened: this.opened,
      disabled: this.disabled,
    };
  }

  public opened: boolean;

  private onChange: (event: KNDropdownModel) => any;
  private onTouched: (event: FocusEvent) => any;

  private subscriptions: Rx.Subscription[] = [];

  public constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef,
    private ngControl: NgControl,
  ) {
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    this.initSubscriptions();
  }

  public ngOnDestroy(): void {
    this.subscriptions
      .forEach((subscription) => subscription.unsubscribe());
  }

  public onSelectorClick(event: MouseEvent): void {
    this.opened = !this.opened;
  }

  public onOptionClick(event: MouseEvent, option: KNDropdownModel): void {
    this.ngModel = option;
    this.opened = false;
  }

  public registerOnChange(onChange: (event: KNDropdownModel) => any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: (event: FocusEvent) => any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(value: KNDropdownModel): void {
    this.changeDetectorRef.detectChanges();
  }

  private initSubscriptions(): void {
    this.subscriptions
      .push(
        Rx.fromEvent(document, 'mousedown')
          .pipe(
            RxOp.filter((event) => (event.target as HTMLElement).closest('kn-dropdown') !== this.elementRef.nativeElement),
          )
          .subscribe((event: MouseEvent) => {
            this.opened = false;
            this.changeDetectorRef.detectChanges();
          }),
      );
  }
}

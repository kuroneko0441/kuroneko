import {
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
} from '@angular/core';
import { KNMenuModel } from '../types';

@Component({
    selector: 'kn-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: [ './menu-item.component.scss' ],
})
export class MenuItemComponent {
    @Input() public model: KNMenuModel;

    @HostBinding('class.hover')
    public get hostClassHover(): boolean {
        return this.hover;
    }

    @HostBinding('class.active')
    public get hostClassActive(): boolean {
        return this.active;
    }

    public get submenuLeft(): number {
        const element = this.elementRef.nativeElement as HTMLElement;
        return element.offsetLeft + element.offsetWidth;
    }

    public subMenuVisible: boolean = false;

    private hover: boolean = false;
    private active: boolean = false;
    private subMenuTimeout: number;

    public constructor(
        private elementRef: ElementRef,
    ) {}

    @HostListener('click', [ '$event' ])
    public onHostClick(event: MouseEvent): void {
        if (this.model.items.length === 0) {
            this.model.callback();
        }
    }

    @HostListener('mouseenter', [ '$event' ])
    public onHostMouseenter(event: MouseEvent): void {
        this.hover = true;

        if (!this.subMenuVisible) {
            if (this.subMenuTimeout !== undefined) {
                clearTimeout(this.subMenuTimeout);
            }

            this.subMenuTimeout = setTimeout(() => this.subMenuVisible = this.subMenuVisible || this.hover, 300) as any;
        }
    }

    @HostListener('mouseleave', [ '$event' ])
    public onHostMouseleave(event: MouseEvent): void {
        this.hover = false;
        this.subMenuVisible = false;
    }

    public onSubmenuMouseenter(event: MouseEvent): void {
        this.hover = true;
        this.subMenuVisible = true;
    }

    public onSubmenuMouseleave(event: MouseEvent): void {
        if (event.relatedTarget === null) {
            return;
        }

        if (this.elementRef.nativeElement === (event.relatedTarget as HTMLElement).closest('kn-menu-item')) {
            this.hover = true;
            this.subMenuVisible = true;
        } else {
            this.hover = false;
            this.subMenuVisible = false;
        }
    }
}

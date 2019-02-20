import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    QueryList,
    ViewChild,
} from '@angular/core';
import { TabPageComponent } from './tab-page/tab-page.component';

@Component({
    selector: 'kn-tab',
    templateUrl: './tab.component.html',
    styleUrls: [ './tab.component.scss' ],
})
export class TabComponent implements AfterContentInit, AfterViewInit {
    @Input()
    public get selectedTabIndex(): number {
        return this._selectedTabIndex;
    }

    public set selectedTabIndex(value: number) {
        if (this._selectedTabIndex !== value) {
            this._selectedTabIndex = value;
            this.tabs.forEach((tab, index) => tab.selected = index === this._selectedTabIndex);
            this.selectedTabIndexChange.emit(this._selectedTabIndex);
        }
    }

    @Output() public selectedTabIndexChange: EventEmitter<number> = new EventEmitter();

    @ViewChild('floatingBorder') private floatingBorder: ElementRef<HTMLDivElement>;

    @ContentChildren(TabPageComponent) private tabPages: QueryList<TabPageComponent>;

    public get tabLabels(): string[] {
        return !this.tabPages ? [] : this.tabPages.map((tabPage) => tabPage.label);
    }

    private get tabs(): TabPageComponent[] {
        return this.tabPages.toArray();
    }

    private _selectedTabIndex: number;

    public constructor(
        private elementRef: ElementRef,
    ) {}

    public ngAfterContentInit(): void {
        setTimeout(() => this.selectedTabIndex = 0);
    }

    public ngAfterViewInit(): void {
        this.setFloatingBorder((this.elementRef.nativeElement as Element).querySelector('div.tab-title'));
    }

    public getTabTitleClass(tabIndex: number): any {
        return {
            selected: tabIndex === this.selectedTabIndex,
        };
    }

    public logEvent(event: MouseEvent, index: number): void {
        this.setFloatingBorder(event.target as Element);
        this.selectedTabIndex = index;
    }

    private setFloatingBorder(element: Element): void {
        let _element = element;
        let left = 0;
        const width = window.getComputedStyle(element)
            .getPropertyValue('width');

        _element = _element.previousElementSibling;
        while (_element !== null) {
            left += parseFloat(window.getComputedStyle(_element)
                .getPropertyValue('width'));
            _element = _element.previousElementSibling;
        }

        this.floatingBorder.nativeElement.style.left = `${left}px`;
        this.floatingBorder.nativeElement.style.width = width;
    }
}

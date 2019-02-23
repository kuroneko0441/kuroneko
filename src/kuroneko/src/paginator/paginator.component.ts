import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'kn-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: [ './paginator.component.scss' ],
})
export class PaginatorComponent {
    @Input()
    public get page(): number {
        return this._page;
    }

    public set page(value: number) {
        let page = Number(value);

        if (Number.isNaN(page)) {
            page = this.firstPage;
        }

        if (this._page !== page) {
            this._page = page;
            this.pageChange.emit(this._page);
        }
    }

    @Input() public firstPage: number = 1;
    @Input() public lastPage: number = 1;
    @Input() public sidePages: number = 2;

    @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();

    public get leftPages(): number[] {
        return (this.page + this.sidePages < this.lastPage
            ? Array.from({ length: this.sidePages })
            : Array.from({ length: this.sidePages + this.page + this.sidePages - this.lastPage }))
            .map((_, index) => this.page - index - 1)
            .reverse()
            .filter((value) => value >= this.firstPage);
    }

    public get rightPages(): number[] {
        return (this.page - this.sidePages > this.firstPage
            ? Array.from({ length: this.sidePages })
            : Array.from({ length: this.sidePages - this.page + this.sidePages + this.firstPage }))
            .map((_, index) => this.page + index + 1)
            .filter((value) => value <= this.lastPage);
    }

    public get prevClass(): any {
        return {
            disabled: this.page <= this.firstPage,
        };
    }

    public get nextClass(): any {
        return {
            disabled: this.page >= this.lastPage,
        };
    }

    private _page: number = this.firstPage;

    public onPrevButtonClick(): void {
        if (this.page > this.firstPage) {
            this.page = this.page - 1;
        }
    }

    public onNextButtonClick(): void {
        if (this.page < this.lastPage) {
            this.page = this.page + 1;
        }
    }
}

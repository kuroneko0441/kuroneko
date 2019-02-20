import {
    Component,
    HostBinding,
    Input,
    TemplateRef,
} from '@angular/core';

@Component({
    selector: 'kn-tab-page',
    templateUrl: './tab-page.component.html',
    styleUrls: [ './tab-page.component.scss' ],
})
export class TabPageComponent {
    @Input() public label: string = '';

    @Input() public bodyTemplate: TemplateRef<any>;

    @HostBinding('style.display')
    public get hostStyleDisplay(): string {
        return this.selected ? 'inline-block' : 'none';
    }

    public selected: boolean = false;
}

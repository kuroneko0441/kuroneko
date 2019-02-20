import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabPageComponent } from './tab-page/tab-page.component';
import { TabComponent } from './tab.component';

@NgModule({
    declarations: [
        TabComponent,
        TabPageComponent,
    ],
    imports: [ CommonModule ],
    exports: [
        TabComponent,
        TabPageComponent,
    ],
    providers: [],
})
export class TabModule {}

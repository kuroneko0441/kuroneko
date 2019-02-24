import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuComponent,
        MenuItemComponent,
    ],
    imports: [ CommonModule ],
    exports: [ MenuComponent ],
    providers: [],
})
export class MenuModule {}

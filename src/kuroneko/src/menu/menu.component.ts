import {
  Component,
  Input,
} from '@angular/core';
import { KNMenuModel } from './types';

@Component({
  selector: 'kn-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.scss' ],
})
export class MenuComponent {
  @Input() public model: KNMenuModel[] = [];
}

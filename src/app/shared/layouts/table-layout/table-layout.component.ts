import { Component, Input } from '@angular/core';
import { Button } from '../../components/navbar/interfaces/button.model';

@Component({
  selector: 'shared-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrl: './table-layout.component.css',
})
export class TableLayoutComponent {

  @Input() button : Button = {
    iconName : 'add',
    title : 'Add new income',
    id : 1,
    isActive : true,
  } as Button;
  
  @Input() handleAction : () => void = () => {};
  @Input() title : string = '';
  @Input() total : number = 0;

  constructor() { }
  
}

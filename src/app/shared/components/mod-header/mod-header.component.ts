import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-mod-header',
  templateUrl: './mod-header.component.html',
  styleUrl: './mod-header.component.css',
})
export class ModHeaderComponent { 

  @Input() action : () => void = () => {};
  @Input() title : string = '';

  constructor() { }

}

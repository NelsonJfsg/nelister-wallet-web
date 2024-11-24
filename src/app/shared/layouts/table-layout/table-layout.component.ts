import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrl: './table-layout.component.css',
})
export class TableLayoutComponent {

handleNew() {
throw new Error('Method not implemented.');
} 

  @Input() title : string = '';
  constructor() { }
}

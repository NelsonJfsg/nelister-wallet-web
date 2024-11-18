import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../navbar/interfaces/button.model';

@Component({
  selector: 'shared-button',
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.css',
})
export class SharedButtonComponent { 
  
  @Input() button : Button = {} as Button;
  @Input() action : () => void = () => {};

}

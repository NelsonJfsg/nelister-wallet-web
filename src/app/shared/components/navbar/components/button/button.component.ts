import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../interfaces/button.model';

@Component({
  selector: 'navbar-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent { 

  @Input() button : Button = {} as Button;
  
  @Output() menuItem = new EventEmitter();

  
}

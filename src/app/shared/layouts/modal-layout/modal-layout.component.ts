import { Component, Input } from '@angular/core';
import { SharedModule } from "../../shared.module";

@Component({
  selector: 'shared-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrl: './modal-layout.component.css',
})
export class ModalLayoutComponent {
  
  // * Header
  @Input() action : () => void = () => {};
  @Input() title : string = '';
  
  // * Bar actions
  @Input() handleSubmit : () => void = () => {};
  @Input() handleCancel : () => void = () => {};

}

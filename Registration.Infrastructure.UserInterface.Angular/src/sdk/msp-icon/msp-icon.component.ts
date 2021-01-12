import { Component, Input } from '@angular/core';

@Component({
  selector: 'msp-icon',
  templateUrl: './msp-icon.component.html',
  styleUrls: ['./msp-icon.component.scss']
})
export class MspIconComponent {
  @Input() icon: string;
  @Input() label?: string = undefined;
  @Input() size = 24;
}

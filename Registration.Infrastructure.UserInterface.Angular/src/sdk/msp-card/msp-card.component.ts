import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'msp-card',
  templateUrl: './msp-card.component.html',
  styleUrls: ['./msp-card.component.scss']
})
export class MspCardComponent implements OnInit {  
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() actionsTemplate?: ComponentType<any> | TemplateRef<any>;
  @Input() actionsTemplateContext: any;
  @Input() imageSource?: string;
  @Input() imageAlt?: string;
  @Input() avatarImageSource?: string;
  @Input() minWidth?: number;
  @Input() maxWidth?: number;
  @Input() minHeight?: number;
  @Input() maxHeight?: number;

  public isLoaded = false;

  ngOnInit(): void {
    this.isLoaded = true;
  }
}

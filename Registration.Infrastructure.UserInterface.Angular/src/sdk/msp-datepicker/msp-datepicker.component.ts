import { Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'msp-datepicker',
  templateUrl: './msp-datepicker.component.html',
  styleUrls: ['./msp-datepicker.component.scss']
})
export class MspDatepickerComponent implements OnInit {
  @Input() label: string;
  @Input() controlName?: string;
  @Input() disabled = false;
  @Input() filter: (d: Date | null) => boolean;


  public formGroup: FormGroup;
  public loaded = false;
  public formControl: AbstractControl;
  
  
  constructor(
    @Optional() private formGroupDirective: FormGroupDirective
  ) {

  }

  ngOnInit(): void {
    if (this.formGroupDirective) this.addFormGroupByDirective();
    if (this.disabled) this.disable();
    this.loaded = true;
  }

  private addFormGroupByDirective(): void {
    this.formGroup = this.formGroupDirective.form;
    this.formControl = this.formGroup.controls[this.controlName];
  }

  public disable(): void {
    this.formControl.disable();
  }
}

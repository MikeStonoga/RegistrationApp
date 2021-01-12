import { Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';

export type MspSelectOptions = MspSelectOption[];
export type MspSelectOption = {name: string, value: number};

@Component({
  selector: 'msp-select',
  templateUrl: './msp-select.component.html',
  styleUrls: ['./msp-select.component.scss']
})
export class MspSelectComponent implements OnInit {
  @Input() options: MspSelectOptions;
  @Input() controlName: string;
  @Input() label: string;
  @Input() disabled = false;

  public formGroup: FormGroup;
  public loaded = false;
  public formControl: AbstractControl;
  public selectedOption: number;

  constructor(
    @Optional() private formGroupDirective: FormGroupDirective
  ) {

  }

  ngOnInit(): void {
    if (this.formGroupDirective) this.addFormGroupByDirective();
    if (this.disabled) this.disable();
    this.selectedOption = this.options[this.formControl.value]?.value ?? undefined
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

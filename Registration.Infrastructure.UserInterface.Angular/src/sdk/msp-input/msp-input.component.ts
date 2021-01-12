import { Optional } from '@angular/core';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'msp-input',
  templateUrl: './msp-input.component.html',
  styleUrls: ['./msp-input.component.scss']
})
export class MspInputComponent implements OnInit {
  @Input() label: string;
  @Input() controlName?: string;
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() icon: string;
  @Input() showSuffixIcon = true;
  @Input() icon2: string;
  @Input() showSuffixIcon2 = true;
  @Input() hint?: string;
  @Input() hintAlign?: 'start' | 'end';
  @Input() hint2?: string;
  @Input() hint2Align?: 'start' | 'end';
  @Input() classes = '';

  @Output() clicked: EventEmitter<void> = new EventEmitter();
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  @Output() suffixIconClicked: EventEmitter<string> = new EventEmitter();
  @Output() suffixIcon2Clicked: EventEmitter<string> = new EventEmitter();

  @ViewChild('input') input: ElementRef;
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

  public emitValueChanged(event) {
    this.valueChanged.emit(event.target.value);
  }

  public emitValueChangedOnSuffixIconCliked() {
    this.valueChanged.emit(this.input.nativeElement.value);
  }

  public emitSuffixIconClicked() {
    this.suffixIconClicked.emit(this.input.nativeElement.value);
  }
  public emitSuffixIcon2Clicked() {
    this.suffixIcon2Clicked.emit(this.input.nativeElement.value);
  }

  public emitClicked() {
    this.clicked.emit();
  }
}

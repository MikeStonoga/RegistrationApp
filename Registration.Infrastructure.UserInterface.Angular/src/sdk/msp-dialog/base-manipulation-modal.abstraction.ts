import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

import {Directive} from "@angular/core";
import { EntityInput } from "../interfaces/DTOs/entity-input.abstraction";
import { EntityOutput } from "../interfaces/DTOs/entity-output.abstraction";
import { BaseManipulationModalInputData } from "../msp-list/msp-list.module";

@Directive()
export abstract class BaseManipulationModalAbstraction<TOutput extends EntityOutput, TManipulationInput extends EntityInput, TManipulationModalComponent> {
  public form: FormGroup;
  public isToDisableForm = false;
  public title: string;

  public get isUpdating(): boolean {return this.inputData.action === 'update'; }
  public get canSave(): boolean {return this.form.valid && this.form.dirty; }


  public get firstNameControl(): string {return 'firstName'; }
  public get firstNameInputLabel(): string {return 'Nome'; }
  
  public get lastNameControl(): string {return 'lastName'; }
  public get lastNameInputLabel(): string {return 'Sobrenome'; }

  constructor(
    public dialogRef: MatDialogRef<TManipulationModalComponent>,
    protected formBuilder: FormBuilder,
    public inputData: BaseManipulationModalInputData<TOutput>,
    public formDisableCondition: boolean = false
  ) {
    this.title = inputData.title;

    this.form = this.getFormGroup();
    this.isToDisableForm = formDisableCondition;
    if (this.isToDisableForm) this.form.disable();
  }

  abstract getFormGroup(): FormGroup;

  public close(confirmed: boolean): void {
    return confirmed
      ? this.closeConfirming()
      : this.closeAborting();
  }

  private closeConfirming(): void {
    const manipulationInput: TManipulationInput = this.form.getRawValue() as TManipulationInput;
    this.dialogRef.close(manipulationInput);
  }

  private closeAborting(): void {
    this.dialogRef.close();
  }
}

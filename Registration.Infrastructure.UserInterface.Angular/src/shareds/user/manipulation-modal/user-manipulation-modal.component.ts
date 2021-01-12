import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UUID } from 'angular2-uuid';
import { BaseManipulationModalAbstraction } from 'src/sdk/msp-dialog/base-manipulation-modal.abstraction';
import { BaseManipulationModalInputData } from 'src/sdk/msp-list/msp-list.module';
import { MspSelectOptions } from 'src/sdk/msp-select/msp-select.component';
import { EducationLevels } from '../models/education-levels.enum';
import { UserInput } from '../models/user-input';
import { UserOutput } from '../models/user-output';

@Component({
  selector: 'app-user-manipulation-modal',
  templateUrl: './user-manipulation-modal.component.html',
  styleUrls: ['./user-manipulation-modal.component.scss']
})
export class UserManipulationModalComponent extends BaseManipulationModalAbstraction<UserOutput, UserInput, UserManipulationModalComponent> {
  get birthDateControl(): string {return 'birthDate'; };
  get birthDateInputLabel(): string {return 'Data de Nascimento'; };

  get emailAddressControl(): string {return 'emailAddress'; };
  get emailAddressInputLabel(): string {return 'Email'; };

  get educationLevelControl(): string {return 'educationLevel'; };
  get educationLevelInputLabel(): string {return 'Escolaridade'; };

  public get canSave(): boolean {return this.form.valid && this.form.dirty; }

  constructor(
    public dialogRef: MatDialogRef<UserManipulationModalComponent>,
    protected formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inputData: BaseManipulationModalInputData<UserOutput>,
  ) {
    super(dialogRef, formBuilder, inputData);
  }


  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [this.inputData.id ?? UUID.UUID(), Validators.required],
      creatorId: [this.inputData.entity?.creatorId ?? undefined],
      creationTime: [this.inputData.entity?.creationTime ?? undefined],
      [this.firstNameControl]: [this.inputData.entity?.firstName ?? undefined, [Validators.required, Validators.pattern('^[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏàáâãäåæçèéêëìíîïÐÑÒÓÔÕÖØÙÚÛÜÝÞßðñòóôõöøùúûüýþÿ a-zA-Z ]*$')]],
      [this.lastNameControl]: [this.inputData.entity?.lastName ?? undefined, [Validators.pattern('^[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏàáâãäåæçèéêëìíîïÐÑÒÓÔÕÖØÙÚÛÜÝÞßðñòóôõöøùúûüýþÿ a-zA-Z ]*$')]],
      [this.birthDateControl]: [this.inputData.entity?.birthDate ?? undefined],
      [this.emailAddressControl]: [this.inputData.entity?.emailAddress ?? undefined, [Validators.email, Validators.required]],
      [this.educationLevelControl]: [this.inputData.entity?.educationLevel ?? undefined],
    });
  }

  public educationLevels: MspSelectOptions = [
    {name: EducationLevels[EducationLevels.Infantil], value: EducationLevels.Infantil},
    {name: EducationLevels[EducationLevels.Fundamental], value: EducationLevels.Fundamental},
    {name: EducationLevels[EducationLevels.Medio], value: EducationLevels.Medio},
    {name: EducationLevels[EducationLevels.Superior], value: EducationLevels.Superior},
  ];
  
  public dontAllowFutureDates = (d: Date | null): boolean => {
    return d < (new Date());
  }
}
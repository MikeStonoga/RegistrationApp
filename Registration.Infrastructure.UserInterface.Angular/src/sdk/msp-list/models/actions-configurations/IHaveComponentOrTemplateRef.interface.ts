import { ComponentType } from '@angular/cdk/portal';
import { TemplateRef } from '@angular/core';

export interface IHaveComponentOrTemplateRef<TComponentOrTemplateRef> {componentOrTemplateRef: ComponentType<TComponentOrTemplateRef> | TemplateRef<TComponentOrTemplateRef>; }

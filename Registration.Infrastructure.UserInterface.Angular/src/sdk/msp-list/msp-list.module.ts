import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MspListComponent } from './msp-list.component';
import { MspListHeaderComponent } from './header/msp-list-header.component';
import { MspListBodyComponent } from './body/msp-list-body.component';
import { MspListFooterComponent } from './footer/msp-list-footer.component';
import { MspButtonModule } from '../msp-button/msp-button.module';
import { MspListHeaderCreateButtonComponent } from './header/buttons/create/msp-list-header-create-button.component';
import { MspSnackbarModule } from '../msp-snackbar/msp-snackbar.module';
import { MspListHeaderSortingButtonComponent } from './header/buttons/sorting/msp-list-header-sorting-button.component';
import { MspListHeaderColumnsComponent } from './header/columns/msp-list-header-columns.component';
import { MspListBodyRowsComponent } from './body/rows/msp-list-body-rows.component';
import { MspListBodyRowComponent } from './body/rows/row/msp-list-body-row.component';
import { MspListBodyRowActionsComponent } from './body/rows/row/actions/msp-list-body-row-actions.component';
import { MspListBodyRowActionsUpdateComponent } from './body/rows/row/actions/update/msp-list-body-row-actions-update.component';
import { MspListBodyRowActionsDeleteComponent } from './body/rows/row/actions/delete/msp-list-body-row-actions-delete.component';
import { MspListBodyRowActionsCustomComponent } from './body/rows/row/actions/custom/msp-list-body-row-actions-custom.component';
import { MspListHeaderColumnsFiltersComponent } from './header/columns/filters/msp-list-header-columns-filters.component';
import { MspListHeaderColumnsFiltersToggleButtonComponent } from './header/columns/filters/buttons/toggle/msp-list-header-columns-filters-toggle-button.component';
import { MspListHeaderColumnsFiltersCleanButtonComponent } from './header/columns/filters/buttons/clean/msp-list-header-columns-filters-clean-button.component';
import { MspListFooterFilterComponent } from './footer/filter/msp-list-footer-filter.component';
import { MspListFooterPaginatorComponent } from './footer/paginator/msp-list-footer-paginator.component';
import { MspListFooterRegistriesCounterComponent } from './footer/registries-counter/msp-list-footer-registries-counter.component';
import { MspInputModule } from '../msp-input/msp-input.module';




@NgModule({
  declarations: [
    MspListComponent,
    MspListHeaderComponent,
    MspListBodyComponent,
    MspListFooterComponent, 
    MspListHeaderColumnsFiltersComponent, 
    MspListHeaderCreateButtonComponent, 
    MspListHeaderColumnsFiltersToggleButtonComponent, 
    MspListHeaderSortingButtonComponent, 
    MspListHeaderColumnsComponent, 
    MspListBodyRowsComponent, 
    MspListBodyRowComponent, 
    MspListBodyRowActionsComponent, 
    MspListBodyRowActionsUpdateComponent, 
    MspListBodyRowActionsDeleteComponent, 
    MspListBodyRowActionsCustomComponent, 
    MspListHeaderColumnsFiltersCleanButtonComponent, 
    MspListFooterFilterComponent, 
    MspListFooterPaginatorComponent, 
    MspListFooterRegistriesCounterComponent
  ],
  imports: [
    CommonModule,
    MspButtonModule,
    FlexLayoutModule,
    MspSnackbarModule,
    MatPaginatorModule,
    MspInputModule,
    ReactiveFormsModule
  ],
  exports: [
    MspListComponent,
    MspButtonModule
  ],
  providers: []
})
export class MspListModule { }


export interface BaseManipulationModalInputData<TEntityOutput> {
  action: 'create' | 'update';
  title: string;
  id: string;
  entity?: TEntityOutput;
  others: any;
}

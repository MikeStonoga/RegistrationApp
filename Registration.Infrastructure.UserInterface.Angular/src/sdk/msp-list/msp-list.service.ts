import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EntityOutput } from '../interfaces/DTOs/entity-output.abstraction';
import { MspApiResponse, MspApiResponseWithOutput } from '../interfaces/DTOs/msp-api-response.interface';
import { MspDialogService } from '../msp-dialog/msp-dialog.service';
import { MspSnackbarNotificateParameters, MspSnackbarService } from '../msp-snackbar/msp-snackbar.service';
import { MspListDefaultFilterConfiguration } from './models/actions-configurations/display/msp-list-default-filter-configuration.interface';
import { MspListGetAllInputOptions } from './models/actions-configurations/display/msp-list-get-all-input-options.interface';
import { MspListSimpleColumn } from './models/columns/msp-list-simple-column.interface';
import { MspCrudListConfiguration, MspListConfiguration } from './models/msp-list-configuration.interface';
import { BaseManipulationModalInputData } from './msp-list.module';
import { CREATE_BUTTON_ICON, DELETE_BUTTON_ICON, UPDATE_BUTTON_ICON } from 'src/shareds/consts/icons.consts';
import { CREATE_BUTTON_TOOLTIP, DELETE_BUTTON_TOOLTIP, UPDATE_BUTTON_TOOLTIP } from 'src/shareds/consts/tooltips.consts';
import { DELETE_DEFAULT_MESSAGE } from 'src/shareds/consts/consts';

export type CrudModificationListActions = 'create' | 'update' | 'delete';
export type CrudModificationListActionsProperties = 'tooltip' | 'icon';

@Injectable()
export class MspListService<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {

  public displayColumnsFiltersControl: boolean;
  

  public defaultConfiguration = {
    create: {icon: CREATE_BUTTON_ICON, tooltip: CREATE_BUTTON_TOOLTIP},
    columnsFilters: {
      displayButton: {icon: 'filter_list', tooltip: 'Filtros das Colunas'},
      eraserButton: {icon: 'youtube_searched_for', tooltip: 'Limpar filtros'},
    },
    footer: {
      filter: {label: 'Filtro', placeholder: 'Digite o filtro desejado...'},
      paginator: {itemsPerPageLabel: 'Registros por página: ', pageSizeOptions: [25, 50, 75, 100]}
    },
    update: {icon: UPDATE_BUTTON_ICON, tooltip: UPDATE_BUTTON_TOOLTIP},
    delete: {icon: DELETE_BUTTON_ICON, tooltip: DELETE_BUTTON_TOOLTIP, autoConfirmMessage: DELETE_DEFAULT_MESSAGE}
  };

  public listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;

  public listGetAllInputOptions: MspListGetAllInputOptions = {
    filter: '',
    defaultFilter: {propertyName: '', value: ''} as MspListDefaultFilterConfiguration,
    columnsFilters: [{propertyName: '', value: ''}],
    pageSize: 25,
    skipCount: 0,
    sorting: ''
  };

  public columnsFiltersFormGroup: FormGroup = new FormGroup({});

  constructor(
    private readonly mspSnackbarService: MspSnackbarService,
    private readonly mspDialogService: MspDialogService
  ) { }

  public hasActions(listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>): boolean {return this.isCrudList(listConfiguration) || !!listConfiguration.actions.customActions; }
  public hasListCrudMethods(listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>): boolean {return this.isCrudList(listConfiguration); }
  public isToShowColumnsFilters(listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>): boolean {return listConfiguration.columnsFilters && listConfiguration.columnsFilters?.enableColumnsFiltersAction ? listConfiguration.columnsFilters.enableColumnsFiltersAction : true; }
  public get listData() {return this.listConfiguration.actions.display.listData; }
  public get hasEntityData(): boolean {return !!this.listData && this.listData.totalCount > 0; }
  public get numberOfEntityElements(): number {return !!this.listData ? this.listData.totalCount : 0; }

  public get interactionsColumnSize(): number {return this.isCrudList(this.listConfiguration) ? this.interactionsColumnSizeWithCrudActions : this.interactionsColumnSizeWithoutCrudActions; }
  public get interactionsColumnSizeWithCrudActions() {return (this.listConfiguration.actions.customActions?.length + 2 ?? 2) * 24 + 10}
  public get interactionsColumnSizeWithoutCrudActions() {return this.listConfiguration.actions.customActions?.length * 24 ?? 60 }

  public get pageSizeOptions(): number[] {
    const customPageSizeOptions = this.listConfiguration.actions.display.pageSizeOptions;  
    return customPageSizeOptions ? customPageSizeOptions : this.defaultConfiguration.footer.paginator.pageSizeOptions; 
  }

  public isCrudList(list: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>): list is MspCrudListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal> {
    const crudList = (list as MspCrudListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>);
    return crudList.actions.create !== undefined
      && crudList.actions.update !== undefined
      && crudList.actions.delete !== undefined;
  }

  public getColumnWidth(column: MspListSimpleColumn): number { return column?.width ?? 999; }


  



  public getCustomOrDefaultActionPropertyValue(action: CrudModificationListActions, property: CrudModificationListActionsProperties, listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>) {
    const hasCustomPropertyValue: boolean = !!listConfiguration.actions[action][property];
    return hasCustomPropertyValue ? listConfiguration.actions[action][property] : this.defaultConfiguration[action][property];
  }

  public manipulateThenShowResponseMessageAndRefreshList(action: CrudModificationListActions): (manipulationInput: TEntityManipulationInput) => void {
    return (manipulationInput?: TEntityManipulationInput) => {
      if (manipulationInput) {
        this.executeActionThenShowResponseMessageAndRefreshList<TOutput>(action, manipulationInput);
      }
    };
  }

  public  executeActionThenShowResponseMessageAndRefreshList<TResponseOutput>(actionAcessor: CrudModificationListActions, inputParameter?: TOutput | TEntityManipulationInput) {
    const actionDefinition: Observable<MspApiResponseWithOutput<TResponseOutput>> = inputParameter
      ? this.listConfiguration.actions[actionAcessor].actionDefinition(inputParameter)
      : this.listConfiguration.actions[actionAcessor].actionDefinition();
    actionDefinition.subscribe(
      this.showResponseMessageAndRefreshList<TResponseOutput>()
    );
  }

  private showResponseMessageAndRefreshList<T>(): (response: MspApiResponse) => void {
    return (response: MspApiResponse) => {
      this.mspSnackbarService.notificate({ message: response.message } as MspSnackbarNotificateParameters);
      if (response.success) {
        this.listConfiguration.actions.refresh()
      }; 
      
    };
  }

  

  public update(entityOutput: TOutput) {
    if (this.isCrudList(this.listConfiguration)) {
      const inputModalData: BaseManipulationModalInputData<TOutput> = {
        action: 'update',
        id: entityOutput.id,
        entity: entityOutput,
        title: this.listConfiguration.actions.update.modalTitle,
        others: this.listConfiguration.actions.update.inputManipulationModalData ?? undefined
      };

      this.mspDialogService.open(this.listConfiguration.actions.create.componentOrTemplateRef, {data: inputModalData})
        .subscribe(this.manipulateThenShowResponseMessageAndRefreshList('update'));
    }
  }


  public toggleDisplayColumnsFilters() {
    this.displayColumnsFiltersControl = !this.displayColumnsFiltersControl
  }
}

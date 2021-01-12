import { ComponentType } from "@angular/cdk/portal";
import { Directive, OnInit, Input, TemplateRef } from "@angular/core";
import { EntityInput } from "src/sdk/interfaces/DTOs/entity-input.abstraction";
import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";
import { MspListGetAllInputOptions } from "src/sdk/msp-list/models/actions-configurations/display/msp-list-get-all-input-options.interface";
import { MspListColumns } from "src/sdk/msp-list/models/columns/msp-list-simple-column.interface";
import { MspCrudListConfiguration } from "src/sdk/msp-list/models/msp-list-configuration.interface";
import { ICrudSharedService } from "src/shareds/base-shared.service.abstraction";
import { NO_REGISTRIES_MESSAGE } from "src/shareds/consts/consts";
import { MspApiResponseWithOutput } from "../interfaces/DTOs/msp-api-response.interface";
import { MspListGetAllResponse } from "../interfaces/DTOs/msp-list-get-all-response.interface";
import { MspSnackbarNotificateParameters, MspSnackbarService } from "../msp-snackbar/msp-snackbar.service";

@Directive()
export abstract class BaseListAbstraction<
  TOutput extends EntityOutput,
  TManipulationInput extends EntityInput,
  TManipulationModal,
  TSharedService extends ICrudSharedService<TOutput, TManipulationInput>
  > implements OnInit {
  public listConfiguration: MspCrudListConfiguration<TOutput, TManipulationInput, TManipulationModal>; // MspReadOnlyListConfiguration<TOutput>;
  public loaded = false;

  @Input() readonly = false;

  constructor(
    protected readonly service: TSharedService,
    protected readonly snackbar: MspSnackbarService,
    manipulationTemplate: ComponentType<TManipulationModal> | TemplateRef<TManipulationModal>
  ) {
    this.listConfiguration = {
      id: undefined,
      columns: this.getListColumns(),
      actions: {
        display: {
          listData: {items: [], totalCount: 0},
          noEntityDataMessage: NO_REGISTRIES_MESSAGE,
          pageSizeOptions: [25, 50, 75, 100],
          getAllDefinition: (inputOptions: MspListGetAllInputOptions) => this.service.getAll(), // TODO: inputOptions
        },
        create: {
          componentOrTemplateRef: manipulationTemplate,
          modalTitle: undefined,
          actionDefinition: (input: TManipulationInput) => this.service.create(input)
        },
        update: {
          componentOrTemplateRef: manipulationTemplate,
          modalTitle: undefined,
          actionDefinition: (input: TManipulationInput) => this.service.update(input)
        },
        delete: {
          enableAutoConfirm: true,
          actionDefinition: (entityOutput: TOutput) => this.service.delete(entityOutput)
        },
        refresh: () => this.service.getAll().subscribe(this.setAllListData())
      }
    };
  }


  private setAllListData() {
    return (listGetAllResponse: MspApiResponseWithOutput<MspListGetAllResponse<TOutput>>) => {
      if (listGetAllResponse.success) this.refreshListData(listGetAllResponse) 
      else this.notificateFailure(listGetAllResponse);
    };
  }

  private refreshListData(listGetAllResponse: MspApiResponseWithOutput<MspListGetAllResponse<TOutput>>) {
    this.listConfiguration.actions.display.listData = listGetAllResponse.result;
    
    const hasNoEntityData: boolean = this.listConfiguration.actions.display.listData.totalCount === 0;
    if (hasNoEntityData) this.setDefaultNoEntityDataMessage();
  }

  private setDefaultNoEntityDataMessage() {
    this.listConfiguration.actions.display.noEntityDataMessage = NO_REGISTRIES_MESSAGE;
  }

  private notificateFailure(listGetAllResponse: MspApiResponseWithOutput<MspListGetAllResponse<TOutput>>) {
    this.listConfiguration.actions.display.noEntityDataMessage = listGetAllResponse.message;
    this.snackbar.notificate({ message: listGetAllResponse.message } as MspSnackbarNotificateParameters);
  }

  abstract getListColumns(): MspListColumns;


  ngOnInit(): void {
    if (this.readonly) {
      this.listConfiguration.actions.create = undefined;
      this.listConfiguration.actions.update = undefined;
      this.listConfiguration.actions.delete = undefined;
    }
    this.loaded = true;
  }

}

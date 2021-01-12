import {
  MspCrudListActionsConfigurations, MspReadOnlyListActionsConfigurations,
} from "./actions-configurations/msp-list-actions-configuration.interface";
import {MspListColumnsFiltersConfiguration} from "./actions-configurations/display/msp-list-columns-filters-configuration.interface";
import {MspListColumns} from "./columns/msp-list-simple-column.interface";
import {MspListFooterConfiguration} from "./footer-configuration/msp-list-footer-configuration.interface";
import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";

export type MspListConfiguration<
  TOutput extends EntityOutput,
  TEntityManipulationInput,
  TManipulationModal
  > = MspCrudListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal> | MspReadOnlyListConfiguration<TOutput>;

export interface MspReadOnlyListConfiguration<TOutput extends EntityOutput> { // readOnly
  id: string;
  columns: MspListColumns;
  columnsFilters?: MspListColumnsFiltersConfiguration;
  selectionModalTitle?: string;

  footer?: MspListFooterConfiguration;
  actions: MspReadOnlyListActionsConfigurations<TOutput>;
}


export interface MspCrudListConfiguration<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> extends MspReadOnlyListConfiguration<TOutput> { // crud
  actions: MspCrudListActionsConfigurations<TOutput, TEntityManipulationInput, TManipulationModal>;
}

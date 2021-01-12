import {MspListDeleteConfiguration} from "./delete/msp-list-delete-configuration.interface";
import {MspListCreateConfiguration} from "./create/msp-list-create-configuration.interface";
import {MspListUpdateConfiguration} from "./update/msp-list-update-configuration.interface";
import {MspListSelectConfiguration} from "./select/msp-list-select-configuration.interface";
import {MspListDisplayConfiguration} from "./display/msp-list-display-configuration.interface";
import {MspListCustomActionConfiguration} from "./custom-actions/msp-list-custom-action-configuration";
import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";

export interface MspReadOnlyListActionsConfigurations<TOutput extends EntityOutput> {
  display: MspListDisplayConfiguration<TOutput>;
  customActions?: MspListCustomActionConfiguration<TOutput>[];
  select?: MspListSelectConfiguration<TOutput>;
  refresh?: () => void;
}

export interface MspCrudListActionsConfigurations<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> extends MspReadOnlyListActionsConfigurations<TOutput> {
  create: MspListCreateConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  display: MspListDisplayConfiguration<TOutput>;
  update: MspListUpdateConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  delete: MspListDeleteConfiguration<TOutput>;
}

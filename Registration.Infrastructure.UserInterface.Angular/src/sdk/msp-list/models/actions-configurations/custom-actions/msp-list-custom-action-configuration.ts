import { IHaveCustomIcon } from "src/sdk/interfaces/Properties/i-have-custom-icon.interface";
import { IHaveCustomTooltip } from "src/sdk/interfaces/Properties/i-have-custom-tooltip.interface";
import { IHaveActionDefinition } from "../IHaveActionDefinition.interface";
import { IMayHaveDisplayCondition } from "../IHaveDisplayCondition.interface";
import { IMayHavePermission } from "../IHavePermission.interface";


export interface MspListCustomActionConfiguration<TOutput> extends IHaveCustomIcon, IHaveCustomTooltip, IMayHavePermission, IMayHaveDisplayCondition, IHaveActionDefinition<CustomActionDefinition<TOutput>> {}
export type CustomActionDefinition<TOutput> = (entity: TOutput) => any;

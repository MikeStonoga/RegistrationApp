import { IHaveCustomIcon } from "../../interfaces/Properties/i-have-custom-icon.interface";
import { IHaveCustomTooltip } from "../../interfaces/Properties/i-have-custom-tooltip.interface";
import { IMayHaveLabel } from "../../interfaces/Properties/i-have-label.interface";

export interface MspMenuTriggerConfiguration extends IHaveCustomTooltip, IHaveCustomIcon, IMayHaveLabel { }

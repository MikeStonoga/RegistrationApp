import { IMayHaveCustomIcon } from "../../interfaces/Properties/i-have-custom-icon.interface";
import { IHaveLabel } from "../../interfaces/Properties/i-have-label.interface";

export interface MspMenuItemConfiguration extends IMayHaveCustomIcon, IHaveLabel {
  routePath: string;
}

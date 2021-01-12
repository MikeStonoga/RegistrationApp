import {MspMenuTriggerConfiguration} from "./msp-menu-trigger-configuration.interface";
import { MspMenuItemConfiguration } from "./msp.menu-item-configuration.interface";

export interface MspMenuConfiguration {
  menuTrigger: MspMenuTriggerConfiguration;
  menuItems: MspMenuItemConfiguration[];
}

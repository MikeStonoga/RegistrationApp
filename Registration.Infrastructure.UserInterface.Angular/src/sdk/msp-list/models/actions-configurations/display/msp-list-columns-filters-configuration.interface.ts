import { MspListButtonConfiguration } from '../msp-list-button-configuration.interface';

export interface MspListColumnsFiltersConfiguration {
  displayButton?: MspListButtonConfiguration;
  eraserButton?: MspListButtonConfiguration;
  displayInitiallyExpanded?: boolean;
  enableColumnsFiltersAction?: boolean;
}

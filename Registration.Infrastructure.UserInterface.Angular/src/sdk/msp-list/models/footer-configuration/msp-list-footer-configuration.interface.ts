import {MspListFilterConfiguration} from "./msp-list-filter-configuration.interface";
import {MspListPaginatorConfiguration} from "./msp-list-paginator-configuration.interface";

export interface MspListFooterConfiguration {
  filter?: MspListFilterConfiguration;
  paginator?: MspListPaginatorConfiguration;
}

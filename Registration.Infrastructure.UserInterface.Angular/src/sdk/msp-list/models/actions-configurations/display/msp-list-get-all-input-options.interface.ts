import {MspListDefaultFilterConfiguration} from "./msp-list-default-filter-configuration.interface";

export interface MspListGetAllInputOptions {
  filter?: string;
  defaultFilter?: MspListDefaultFilterConfiguration;
  columnsFilters?: MspListDefaultFilterConfiguration[];
  skipCount?: number;
  pageSize?: number;
  sorting?: string;
}

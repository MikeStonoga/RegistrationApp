
export type MspListColumn = MspListSimpleColumn;
export type MspListColumns = MspListColumn[];

export interface MspListSimpleColumn {
  width?: number;
  title: string;
  valueAcessor: string;
  type?: MspColumnsTypes;
  contentAlign?: MspColumnContentAlign;
}

export type MspColumnsTypes = 'text' | 'checkbox' | 'date' | 'datetime';
export type MspColumnContentAlign = 'left' | 'center' | 'right' | 'justify';

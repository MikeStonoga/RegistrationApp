import { MspListColumn } from "src/sdk/msp-list/models/columns/msp-list-simple-column.interface";

export function getDefaultColumns(nameColumnWidth: number = undefined): MspListColumn[] {
  return [
    {title: 'Data de Criação', valueAcessor: 'creationTime', width: 170, type: 'datetime'},
    {title: 'Última Modificação', valueAcessor: 'lastModificationTime', width: 195, type: 'datetime'},
    {title: 'Nome', valueAcessor: 'firstName', width: nameColumnWidth},
  ]
}
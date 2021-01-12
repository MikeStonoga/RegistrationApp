export interface BaseManipulationModalInputData<TEntityOutput> {
  action: 'create' | 'update';
  title: string;
  id: string;
  entity?: TEntityOutput;
  others: any;
}

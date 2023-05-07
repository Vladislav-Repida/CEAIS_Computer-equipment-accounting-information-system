export default class TableDescriptionItemModel {
  title: string;
  value: string;

  constructor(obj?: Partial<TableDescriptionItemModel>) {
    Object.assign(this, obj);
  }
}

export default class BaseSelectOptionModel {
  /** Идентификатор опции */
  id: number;
  /** Текст опции */
  text: string;

  constructor(obj?: Partial<BaseSelectOptionModel>) {
    Object.assign(this, obj);
  }
}

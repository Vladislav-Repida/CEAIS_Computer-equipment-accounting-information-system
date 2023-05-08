/** Сервис для работы с локальм хранилищем */
export default class LocalStorageService<T extends Array<Object>> {
  /** Название локального хранилища */
  private name: string;

  /** Получаем данные из локального хранилища */
  GetAll = () => JSON.parse(window.localStorage.getItem(this.name)) as T;

  /** Записываем данные в локальное хранилище */
  WriteAll = (data: T) =>
    window.localStorage.setItem(this.name, JSON.stringify(data));

  constructor(name: string) {
    this.name = name;
  }
}

export default class LocalStorageService<T extends Array<Object>> {
  private name: string;

  GetAll = (): T => {
    return JSON.parse(window.localStorage.getItem(this.name));
  };

  WriteAll = (data: T) => {
    window.localStorage.setItem(this.name, JSON.stringify(data));
  };

  constructor(name: string) {
    this.name = name;
  }
}

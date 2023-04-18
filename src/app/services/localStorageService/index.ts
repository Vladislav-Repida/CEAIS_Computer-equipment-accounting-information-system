import { Ref, watch } from "vue";

export default class LocalStorageService {
  /** Ключ для локального хранилища */
  private key = "CEAIS_DATA";

  /** Сохраняем данные в локальное хранилище */
  Save<T>(data: Object | Array<T>) {
    window.localStorage.setItem(this.key, JSON.stringify(data));
  }

  /** Автоматически сохраняем данные в локальное хранилище при любом изменении */
  WatchAutoSave<T>(data: Ref<Object | Array<T>>) {
    watch(
      () => data.value,
      () => {
        this.Save(data.value);
      },
      { deep: true }
    );
  }

  /** Получаем данные из локального хранилища */
  Get<T>() {}
}

import { computed, ref } from "vue";
import LocalStorageService from "../localStorage/localStorage";

/** Функция для создания реактивного значения массива которое будет привзано к локальному хранилищу */
const LcReactiveArray = <T extends Array<Object>>(lcName: string) => {
  // Создаем объект для управления локальным хранилищем
  const lc = new LocalStorageService<T>(lcName);
  // Внутренне значение
  const innerValue = ref<T>(lc.GetAll() || ([] as T));

  // Создаем и возвращаем реактивное значение
  return computed<T>({
    get() {
      return innerValue.value;
    },
    set(value) {
      // Обновляем внутренне значение
      innerValue.value = value;
      // Обновляем значение в локальном хранилище
      lc.WriteAll(value);
    },
  });
};

export default LcReactiveArray;

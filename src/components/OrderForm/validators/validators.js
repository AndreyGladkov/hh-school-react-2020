/* Объект с функциями для валидации контроллов */

export const validators = {
  //Проверка на пустой ввод
  isEmptyField: {
    func: function(field) {
      if (!field.value.trim()) {
        return true;
      }
      return false;
    },
    errorMessage: "Поле не может быть пустым"
  },

  //Проверка на максимальную длину строки
  isBigString: {
    func: function(field) {
      const maxLength = 100;
      if (field.value.length > maxLength) {
        return true;
      }
      return false;
    },
    errorMessage: `Слишком длинная строка`
  },

  //Проверка валидности ввода email адреса
  isNotEmail: {
    func: function(field) {
      const match = field.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if (!match) {
        return true;
      }
      return false;
    },
    errorMessage: "Введите корректный email-адрес"
  },

  //Проверка валидности ввода кода оператор телефона
  isNotOperatorCode: {
    func: function(field) {
      const match = field.value.match(/\b\d{3}\b/);

      if (!match) {
        return true;
      }
      return false;
    },
    errorMessage: "3 цифры"
  },

  //Проверка валидности ввода номера телефона
  isNotTelNumber: {
    func: function(field) {
      const match = field.value.match(/\b\d{7}\b/);

      if (!match) {
        return true;
      }
      return false;
    },
    errorMessage: "7 цифр"
  }
};

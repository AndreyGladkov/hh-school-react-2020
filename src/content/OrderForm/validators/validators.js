export const validators = {

    isNotEmail: {
        func: function (field) {
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

    isNotOperatorCode: {
        func: function (field) {
            const match = field.value.match(/\b\d{3}\b/);

            if (!match) {
                return true;
            }
            return false;
        },
        errorMessage: "3 цифры"
    },

    isNotTelNumber: {
        func: function (field) {
            const match = field.value.match(/\b\d{7}\b/);

            if (!match) {
                return true;
            }
            return false;
        },
        errorMessage: "7 цифр"
    },

    isEmptyField: {
        func: function (field) {
            if (!field.value.trim()) {
                return true;
            }
            return false;
        },
        errorMessage: "Поле не может быть пустым"
    },

    isBigString: {
        func: function (field) {
            const maxLength = 100;
            if (field.value.length > maxLength) {
                return true;
            }
            return false;
        },
        errorMessage: `Слишком длинная строка`
    }
};
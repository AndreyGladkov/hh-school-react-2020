import { validators } from "./../validators/validators";

/* Конифиги контроллов для формы */
export const controlsConfig = {
  fullName: {
    name: "fullName",
    value: "",
    withLabel: false,
    labelTitle: "",
    placeholder: "ФИО",
    readOnly: false,
    autocomplete: "off",
    modifierArr: [],
    disabled: false,
    onChangeHandler: null,
    valid: false,
    shouldValidate: true,
    errorMessage: "",

    required: true,
    validityFunctions: [validators.isEmptyField, validators.isBigString]
  },
  email: {
    name: "email",
    value: "",
    withLabel: false,
    labelTitle: "",
    placeholder: "Электронная почта",
    readOnly: false,
    autocomplete: "off",
    modifierArr: [],
    disabled: false,
    onChangeHandler: null,
    valid: false,
    shouldValidate: true,
    errorMessage: "",

    required: true,
    validityFunctions: [validators.isNotEmail]
  },
  countryCode: {
    name: "countryCode",
    value: "+7",
    withLabel: false,
    labelTitle: "",
    placeholder: "",
    readonly: true,
    autocomplete: "off",
    modifierArr: ["tel-country-code"],
    disabled: false,
    onChangeHandler: null,
    valid: true,
    shouldValidate: false,
    errorMessage: "",

    required: true,
    validityFunctions: []
  },
  operatorCode: {
    name: "operatorCode",
    value: "",
    withLabel: false,
    labelTitle: "",
    placeholder: "Код",
    readOnly: false,
    autocomplete: "off",
    modifierArr: ["tel-operator-code"],
    disabled: false,
    onChangeHandler: null,
    valid: false,
    shouldValidate: true,

    required: true,
    validityFunctions: [validators.isNotOperatorCode]
  },
  telNumber: {
    name: "telNumber",
    value: "",
    withLabel: false,
    labelTitle: "",
    placeholder: "Номер",
    readOnly: false,
    autocomplete: "off",
    modifierArr: ["tel-number-code"],
    disabled: false,
    onChangeHandler: null,
    valid: false,
    shouldValidate: true,

    required: true,
    validityFunctions: [validators.isNotTelNumber]
  },
  deliveryMethod: {
    checkedValue: "deliveryPickup",
    selfPickup: {
      name: "deliveryMethod",
      value: "selfPickup",
      withLabel: true,
      labelTitle: "Самовывоз",
      disabled: false,
      checked: false,
      modifierArr: ["sqared"],
      onChangeHandler: null,

      required: true
    },

    deliveryPickup: {
      name: "deliveryMethod",
      value: "deliveryPickup",
      withLabel: true,
      labelTitle: "Доставка",
      disabled: false,
      checked: true,
      modifierArr: ["sqared"],
      onChangeHandler: null,

      required: true
    }
  },
  paymentMethod: {
    checkedValue: "paymentOnline",
    paymentOnline: {
      name: "paymentMethod",
      value: "paymentOnline",
      withLabel: true,
      labelTitle: "Онлайн-оплата",
      disabled: false,
      checked: true,
      modifierArr: ["circle"],
      onChangeHandler: null,

      required: true
    },
    paymentCash: {
      name: "paymentMethod",
      value: "paymentCash",
      withLabel: true,
      labelTitle: "Наличными",
      disabled: false,
      checked: false,
      modifierArr: ["circle"],
      onChangeHandler: null,

      required: true
    },
    paymentCard: {
      name: "paymentMethod",
      value: "paymentCard",
      withLabel: true,
      labelTitle: "Картой при получении",
      disabled: false,
      checked: false,
      modifierArr: ["circle"],
      onChangeHandler: null,

      required: true
    }
  },
  smsNotification: {
    name: "smsNotification",
    value: "",
    withLabel: true,
    labelTitle: "Хочу получать SMS уведомления",
    disabled: false,
    checked: true,
    modifierArr: [],
    onChangeHandler: null,

    required: true
  },
  cityLocataion: {
    name: "cityLocataion",
    value: "Город",
    modifierArr: [],
    onClickHandler: null,
    apiAddress: "https://api.hh.ru/areas/113",

    required: true
  },
  addressExpaned: {
    placeholder: "Адрес",
    name: "addressExpaned",
    value: "",
    modifierArr: [],
    onChangeHandler: null,

    required: true
  }
};

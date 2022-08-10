const filterCards = (cardsArray, columnNumber) => {
  return cardsArray ? cardsArray.filter(card => card.row === columnNumber) : []
}

const checkFormValidity = (inputsArray) => {
  return !inputsArray.some(input => !input.validity.valid)
}

const InputsValidationMessages = {
  'email': 'Пожалуйста, проверьте введённый e-mail',
  'password': 'не менее 1 и не более 128 символов',
  'text': 'Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @ . + - _'
}

export { filterCards, checkFormValidity, InputsValidationMessages }

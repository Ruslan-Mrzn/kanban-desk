const filterCards = (cardsArray, columnNumber) => {
  return cardsArray ? cardsArray.filter(card => card.row == columnNumber) : []
}

export { filterCards }

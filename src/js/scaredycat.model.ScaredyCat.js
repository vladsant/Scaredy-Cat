scaredycat.model.ScaredyCat = class {
  constructor(id, card) {
    this.id = id;
    this.card = card;
  }

  isThatCardACatCard(yourCard) {
    return this.card === yourCard;
  }
};

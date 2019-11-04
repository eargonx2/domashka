var card ={};

cardName = 'My card';
card.name = 'Test';
card.date = '04.11.2019';
card.description = 'Test description';
card.active = true;
card.position = 0;

// card[cardName] = cardName;

// const cardList = [];

// delete card.active;
// StringList.splice(1,1);  //первая цифра к которому обращемся, вторая какой удаляем

// cardList[cardList.length] = card;
// cardList.push(card);  //push добавляет значение в конец масива
// console.log(cardList.length, cardList.pop(), cardList.active);

var customObf = Object.create(Object.prototype,

for (var key in card) {
  console.log(key, card[key]);
}

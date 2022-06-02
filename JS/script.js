"use strict";

// let myLifeStile = 'freelance';
// let myName = 'alex',
//     myAge = '30',
//     myMessage = 'ура';
// let myNewAge = '13';

// myAge = '15';

// myAge = myNewAge

// console.log('я учу js');
// console.log('myLifestyle');
// console.log(myAge);


// function testBlock() {
//     let main = 'privet';
//     console.log(main);
// }
// testBlock()


// const userProfile = {
//     name: 'velogitara',
//     age: '40',
//     massage: 'work for life'
// }

// userProfile.age = 50;
// console.log(userProfile);


// let userColorEye = '';
// let user = 'Ася';
// let userName = 'Вася';
// userName = user
// console.log(user);



// let userName = 'null';

// console.log(typeof userName)

// console.log(userName)


// let willYouMarryMe = true;
// if (willYouMarryMe) {
//     console.log('Ура');
// } else {
//     console.log('fuck')
// }


// let trueOrFalse = 58 + 10;
// console.log(trueOrFalse);

// let userAge = ('30');
// let userHeight = 1.70;
// console.log(userAge);
// console.log(typeof userAge);
// console.log(userHeight);
// console.log(typeof userHeight);




// let userAge = 100;
// let userAgeInfo = `Возраст: ${userAge}`;
// console.log(userAgeInfo);

// let userAge = 100;
// console.log(userAge);
// console.log(typeof userAge);

// userAge = String(userAge);
// console.log(userAge);
// console.log(typeof userAge);

// ============= 34

// Добавь объекту bookShelf ещё два метода,
//     которые пока что будут возвращать просто строки
//     по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.
//  Возвращает строку "Deleting book <имя книги>",
//     где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName)
//  будет обновлять название книги на новое
//     .Возвращает строку "Updating book <старое имя> to <новое имя>"
//     , где < старое имя > и < новое имя > это значения
//         параметров oldName и newName соотвественно.





// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//   return `Updating book ${oldName} to ${newName}`
// },
    
//   // Change code above this line
// };

// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));



///========= 35 =======


// Дополни метод updateBook(oldName, newName) так,
//   чтобы он изменял название книги с oldName на newName
//    в свойстве books.Используй indexOf() для того,
//   чтобы найти нужный элемент массива,
//   и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const bookIndex = this.books.indexOf(oldName)
      
//     console.log(bookIndex);
//     console.log(this.books);
    
//     return this.books.splice(bookIndex, 1, newName)
    

//     // Change code above this line
//   },
// };


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// // console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// // значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]
// console.log(bookShelf.books);


/// ============ 39 ========

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// const bookIndex = this.potions.indexOf(potionName)
// // console.log(bookIndex);
// return this.potions.splice(bookIndex, 1)
//     // Change code above this line
//   },
// };


// atTheOldToad.removePotion("Dragon breath")
//   ;    // в свойстве potions будет массив ["Speed potion", Stone skin"]
//   console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion")
// // ), в свойстве potions будет массив["Stone skin"]
//   console.log(atTheOldToad.potions);


/// ============ 40 ========
// Дополни метод updatePotionName(oldName, newName) так,
//   чтобы он обновлял название зелья с oldName на newName,
//   в массиве зелий в свойстве potions.


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.potions.indexOf(oldName)
//     console.log(bookIndex);
//     return this.potions.splice(bookIndex, 1 ,newName)

//     // Change code above this line
//   },
// };


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions);
 
//   // , в свойстве potions будет массив["Speed potion", "Polymorth", "Stone skin"]
//  atTheOldToad.updatePotionName("Stone skin", "Invisibility")
//   // , в свойстве potions будет массив["Speed potion", "Polymorth", "Invisibility"]

/// =========== 41 ==============

// Выполни рефакторинг методов объекта atTheOldToad так,
//   чтобы они работали не с массивом строк, а с массивом объектов.

//   getPotions() - метод для получения всех зелий.
//  Возвращает значение свойства potions.
//   addPotion(newPotion) - добавляет зелье newPotion(уже объект) в массив 
// в свойстве potions, но только если такого зелья еще нет в инвентаре.
// В противном случае возвращается строка.
//   removePotion(potionName) - удаляет объект зелья с именем potionName
//  из массива в свойстве potions.
//   updatePotionName(oldName, newName) - обновляет свойство name
// объекта - зелья с названием oldName на newName в массиве potions.




  const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
    addPotion(newPotion) {
    
      
    //   if (this.potions.includes(newPotion)) {
    //   // console.log(newPotion);
    //   return `Error! Potion ${newPotion} is already in your inventory!`;
    // }

    this.potions.push(newPotion);
    },
    
    
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
console.log(potionIndex);
    if (potionIndex === -1) {
       return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// console.table(atTheOldToad.potions);
atTheOldToad.removePotion({ name: "Invisibility", price: 620 })
console.table(atTheOldToad.potions);
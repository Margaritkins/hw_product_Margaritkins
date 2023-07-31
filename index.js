/*Створити клас Товар з властивостями: назва, ціна, валюта, кількість(ціле),
і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
У фізичного товара додається властивість вага.
У віртуального товара додається властивість розмір пам'яті.

Не забуваємо про сеттери, геттери та обробку помилок!

Створити екземпляр кожного класу і викликати на ньому усі доступні методи*/
const TOO_MUCH_MESSAGE = "out of stock";
class Product {
  /**
   *
   * @param {string} name
   * @param {number} price positive
   * @param {string} currency
   * @param {number} amount integer positive
   */
  constructor(name, price, currency, amount) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.amount = amount;
  }

  getInfo() {
    return `${this._name}:  ${this._price}  ${this._currency}  ${this._amount}`;
  }
  byProduct(amount) {
    if (amount <= this._amount) {
      this._amount -= amount;
      return amount * this._price;
    }
    return TOO_MUCH_MESSAGE;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string" || value === "" || value === " ") {
      throw new TypeError("muct be string");
    }
    this._name = value;
  }

  get price() {
    return this._price;
  }
  set price(number) {
    if (typeof number !== "number") {
      throw new TypeError("must be a number");
    }
    if (number <= 0) {
      throw new RangeError("must be positive number");
    }
    this._price = number;
  }

  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (typeof value !== "string" || value === "" || value === " ") {
      throw new TypeError("must be not empty string");
    }
    this._currency = value;
  }

  get amount() {
    return this._amount;
  }
  set amount(number) {
    if (typeof number !== "number") {
      throw new TypeError("must be a number");
    }
    if (number <= 0) {
      throw new RangeError("must be positive number");
    }
    if (Number.isInteger(number === false)) {
      throw new Error("must be integer nuber");
    }
    this._amount = number;
  }
}

class Physical extends Product {
  /**
   *
   * @param {string} name
   * @param {number} price positive
   * @param {string} currency
   * @param {number} amount integer positive
   * @param {number} weight positive
   */
  constructor(name, price, currency, amount, weight) {
    super(name, price, currency, amount);
    this._weight = weight;
      }
      getInfo() {
        return `${this._name}:  ${this._price}  ${this._currency}  ${this._amount} ${this._weight}`;
      }

  get weight() {
    return this._weight;
  }
  set weight(value) {
    if (typeof value !== 'number'){
      throw new TypeError('must be a number')
    }
    if(number <=0){
      throw new RangeError('must be positive number');
    }
    this._weight = value;
  }
}

class Virtual extends Product{
  /**
   * 
    @param {string} name
   * @param {number} price positive
   * @param {string} currency
   * @param {number} amount integer positive 
   * @param {number} memorySize  positive
   */
  constructor(name, price, currency, amount, memorySize){
    super(name, price, currency, amount);
    this._memorySize = memorySize
  }
  getInfo() {
    return `${this._name}:  ${this._price}  ${this._currency}  ${this._amount} ${this._memorySize}`;
  }

  get memorySize(){
    return this._memorySize;
  }
  set memorySize (value){
    if (typeof value !== 'number'){
      throw new TypeError('must be a number')
    }
    if(number <=0){
      throw new RangeError('must be positive number');
    }
    this._memorySize = value;
  }
}


try {
  console.group("about product");
  const product = new Product("milk", 20, "UAH", 100);
  console.log(product);
  console.log(product.getInfo());
  console.log(product.byProduct(4));
  console.log(product.byProduct(97));
  console.groupEnd;

  console.group('about physical')
  const physical=new Physical('cheese', 100,'UAH', 20, 20);
  console.log(physical);
  console.log(physical.getInfo());
  console.log(physical.byProduct(4));
  console.log(physical.byProduct(97));
  console.groupEnd;
  
  console.group('about virtual')
  const virtual=new Virtual('meat', 200,'UAH', 10, 30);
  console.log(virtual);
  console.log(virtual.getInfo());
  console.log(virtual.byProduct(4));
  console.log(virtual.byProduct(97));
  console.groupEnd

} catch (error) {
  console.log(error.message);
}

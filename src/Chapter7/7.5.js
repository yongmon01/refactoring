class Person {
  constructor() {
      this._telephoneNumber = new TelephoneNumber()
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }
}

class TelephoneNumber{
    constructor()

    get areaCode() {return this._areaCode}
    set areaCode(arg) {this.areaCode = arg}
    get number() {return `(${this.areaCode}) ${this.number}`}
    toString() {return `(${this.areaCode}) ${this.number}`}
}

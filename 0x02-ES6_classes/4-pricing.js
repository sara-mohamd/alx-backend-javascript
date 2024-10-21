import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    /**
   * Create a Pricing instance.
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency for the price.
   * Call setter directly to check params validations
   */
    this.amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAccount === 'number')
      this._account = newAmount;
    else
      throw TypeError('Amount must be a number')
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency === 'currency')
      this._currency = newCurrency;
    else
      throw TypeError('Currency must be a currency');
  }

  // displayFullPrice() {
  //   return `${this._amount}`
  // }

  static convertPrice(amount, conversionRate) {
    this.amount = amount;
    if (typeof conversionRate === 'number')
      return conversionRate * this.amount;
  }
}
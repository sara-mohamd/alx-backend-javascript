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
    if (typeof newAmount === 'number')
      this._amount = newAmount;
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

  displayFullPrice() {
    return `${this._amount}: ${this._currency.name} (${this._currency.code})`;
  }


  static convertPrice(amount, conversionRate) {
    /**
   * Static method to convert the price to another currency using a conversion rate.
   * @param {number} amount - The price amount.
   * @param {number} conversionRate - The conversion rate to apply.
   * @return {number} The converted price.
    */

    if (typeof conversionRate === 'number')
      return conversionRate * this.amount;
    else
      throw new TypeError('Conversion rate must be a number');
  }
}

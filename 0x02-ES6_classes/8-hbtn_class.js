export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number')
      this._size = size;
    else
      throw TypeError('Size must be a number')
    if (typeof location === 'string')
      this._location = location;
    else
      throw TypeError('Location must be a string')
  }


  //When the class is cast into a Number, it should return the size.
  // When the class is cast into a String, it should return the location.
  [Symbol.toPrimitive](type) {
    if (type === 'number')
      return this._size;
    if (type === 'string')
      return this._location;
    return this;
  }
}
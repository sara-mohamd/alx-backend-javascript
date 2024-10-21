import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'numbre')
      this._floors = floors;
    else
      throw new TypeError('floors must be a number');
  }

  get floors() {
    return this_floors;
  }
  vacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
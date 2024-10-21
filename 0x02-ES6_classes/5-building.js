export default class Building {
  constructor(sqft) {
    /**
     * Constructor check first if this instanced created to subclass
     * Check the evacuationWarningMessage as each building has it's own evacuation way
     */
    if (this.constructor !== Building && this.evacuationWarningMessage !== 'function')
      throw new Error('Class extending Building must override evacuationWarningMessage');
    this._sqft = sqft;
  }

  // sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  static evacuationWarningMessage() {
    /**
     * It’s a method that is supposed to give a warning message or set of instructions
     * about how to evacuate the building.
     * the implementation of this method is left to
     * subclasses that extend from the abstract Building class.
     */
    return '';
  }
}
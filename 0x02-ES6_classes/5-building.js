export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    Building.validateOverride(this);
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  static validateOverride(instance) {
    if (instance.constructor !== Building && instance.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}

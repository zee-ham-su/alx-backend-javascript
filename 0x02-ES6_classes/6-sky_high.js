import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding.validateNumber(floors, 'floors');
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    this._floors = SkyHighBuilding.validateNumber(newFloors, 'floors');
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

  static validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number.`);
    }
    return value;
  }
}

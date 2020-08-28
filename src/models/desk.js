import Position from './position';
import Base from './base';

export default class Desk extends Base {
  constructor() {
    super();
    this.student = null;
    this.position = new Position();
  }

  /**
   * Name of class
   *
   * @returns string
   */
  static className() {
    return 'Desk';
  }

  /**
   * Move a desk to a different location
   *
   * @param int x
   * @param int y
   */
  move(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  /**
   * Calculate the distance between desks
   *
   * @param Desk otherDesk
   * @returns number
   */
  distance(otherDesk) {
    return this.position.distance(otherDesk.position);
  }
}

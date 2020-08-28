import Base from './base';

export default class Student extends Base {
  constructor() {
    super();
    this.name = null;
    this.preferences = [];
  }

  /**
   * Name of class
   *
   * @returns string
   */
  static className() {
    return 'Student';
  }

  /**
   * Add a preferred student
   *
   * @param Student student
   */
  addPreference(student) {
    this.preferences.push(student);
  }

  /**
   *
   * @param Student student
   */
  removePreference(student) {
    this.preferences = this.preferences.filter(st => st !== student);
  }
}

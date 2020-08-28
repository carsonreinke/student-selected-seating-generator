import Strategy from './strategy';

export default class RandomStrategy extends Strategy {
  constructor() {
    super();
  }

  /**
   * Name of class
   *
   * @returns string
   */
  static className() {
    return 'RandomStrategy';
  }

  /**
   *
   * @param Room room
   */
  arrange(room) {
    const students = [...room.students];
    students.sort(() => Math.random());
    room.desks.forEach((desk, index) => {
      desk.student = students[index];
    });
  }
}

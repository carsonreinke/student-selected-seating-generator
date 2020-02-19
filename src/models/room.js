import Base from "./base";
import Desk from "./desk";
import Student from "./student";

export default class Room extends Base {
    constructor(arrangementStrategy) {
        super();
        this.desks = [];
        this.students = [];
        this.arrangementStrategy = arrangementStrategy;
    }

    /**
     * @returns Desk
     */
    addDesk() {
        const desk = new Desk();
        this.desks.push(desk);
        return desk;
    }

    /**
     * 
     * @param Desk desk 
     */
    removeDesk(desk) {
        this.desks = this.desks.filter(value => value.id !== desk.id);
    }

    /**
     * @returns Student
     */
    addStudent() {
        const student = new Student();
        this.students.push(student);
        return student;
    }

    /**
     * @todo
     */
    arrange() {
        this.arrangementStrategy.arrange(this);
    }

    /**
     * Find a student's desk
     * 
     * @param Student student 
     * @returns Desk
     */
    findStudentDesk(student) {
        return this.desks.find(desk => desk.student === student);
    }
}
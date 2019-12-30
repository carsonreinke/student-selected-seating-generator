export default class Student {
    constructor() {
        this.name = null;
        this.preferences = [];
    }

    /**
     * Add a preferred student
     * 
     * @param Student student 
     */
    addPreference(student) {
        this.preferences.push(student);
    }
}
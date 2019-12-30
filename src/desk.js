import Position from './position';

export default class Desk {
    constructor() {
        this.student = null;
        this.position = new Position();
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
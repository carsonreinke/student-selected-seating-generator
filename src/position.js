export default class Position {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    /**
     * Distance between two positions
     * 
     * @param number other 
     */
    distance(other) {
        return Math.sqrt(
            Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2)
        );
    }
}
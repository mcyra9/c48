class Tile {

    constructor() {
        this.width = 80;
        this.height = 80;
        this.x = 0;
        this.y = 0;
    }
    display() {
        //fill("white");
        rect(this.x, this.y, this.width, this.height);
    }
}

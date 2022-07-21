class Food {
    constructor() {
        this.size = SQUARE_SIZE;
        this.setRandomPosition();
        console.log(this.x);
    }

    setRandomPosition() {
        const maxSize = ((GAME_SIZE / this.size) -1);
        this.x = Math.round(Math.random() * GAME_SIZE % maxSize);
        this.y = Math.round(Math.random() * GAME_SIZE % maxSize);
    }

    draw() {
        ctx.fillStyle = "yellow";
        ctx.shadowOffsetX = 6;
        ctx.shadowOffsetY = 6;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}
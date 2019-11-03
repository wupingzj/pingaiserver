interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area:100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: "black"});

// function interface
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = (source: string, sub: string) => {
    let result = source.search(sub);
    return result > -1;
}

// class interface
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {
    }
}
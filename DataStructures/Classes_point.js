class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){ //distance btn 2 points, form right angled triangle, cal hypotenuse
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1) //x:5, y:5
console.log(Point.distance(p1,p2));//distance btn the 2 points

let shapeBox = document.getElementById('div-shape-box');

//Parent Class
class Shape {
    constructor(width, height, radius) {
        this.width = width;
        this.height = height;
        this.radius = this.height / 2;
        this.name = "Shape";
        this.div = document.createElement('div');
        this.div.className = 'shapes'
        this.div.style.width = width + 'px';
        this.div.style.height = height + 'px';
        this.div.style.left = Math.floor(Math.random() * (600 - width)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (600 - height)) + 'px';
        shapeBox.appendChild(this.div);
        
        this.div.addEventListener('click', () => {
            this.shapeInfo();
        });
        
        //Remove Shape
        this.div.addEventListener('dblclick', () => {
            this.removeShape()
        });


        this.updateColor();
    }
    
    updateColor() {
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 123)}, ${randomVal(0, 112)}`;
        this.div.style.backgroundColor = randomColor;
    }
    
    shapeInfo() {
        document.getElementById('h4Name').innerText = this.name;
        document.getElementById('h4Width').innerText = this.width;
        document.getElementById('h4Height').innerHTML = this.height;
        document.getElementById('h4Radius').innerText = this.radius;
        document.getElementById('h4Area').innerText = this.area();
        document.getElementById('h4Perimeter').innerText = this.perimeter();
    }
    area(){
        return this.height * this.width;
    }
    perimeter(){
        return this.height * 2 + this.width * 2;
    }
}

function insertShape() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
}


function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//Child Class Rectabnglel//
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.name = 'Rectangle', 'color red';
        this.radius =   null
        this.updateColor();
        this.div.className = 'rectangle ';
    }
}

// Child Class for Square//
class Square extends Rectangle {
    constructor(height) {
        super(height, height);
        this.name = 'Square';
        this.radius = null
        this.updateColor()
        this.div.style.width = this.width + 'px';
        this.div.className = 'square';
    }
}

// Child Class for Circle//
class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.name = 'Circle';
        this.updateColor();
        this.div.className = 'circle';
        this.radius = radius;
    }
    area() { 
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
        return 2 * Math.PI * (this.radius);
    }
}

//Child Class for Triangle//
class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.name = 'Triangle';
        this.div.className = 'triangle-topleft';
        this.div.style.width = '0px';
        this.div.style.height = '0px';
        this.radius = null;
        this.updateColor();
        this.div.style.borderTopWidth = this.height + 'px';
        this.div.style.borderRightWidth = this.height + 'px';
    }
    area() {
        return (this.height * this.height) / 2;
    }
    perimeter() {
        return 2 * this.height + (Math.sqrt(2 * Math.pow(this.height, 2)))
    }
}

document.getElementById('recButton').addEventListener('click', function () {
    var recWidth = document.getElementById('recWidth').value;
    var recHeight = document.getElementById('recHeight').value;
    new Rectangle(recWidth, recHeight);
})

document.getElementById('sqButton').addEventListener('click', function () {
    var squareLength = document.getElementById('sqLength').value;
    new Square(squareLength);
})

document.getElementById('cirButton').addEventListener('click', function () {
    var circleRadius = document.getElementById('cirRadius').value;
    new Circle(circleRadius);
})

document.getElementById('triButton').addEventListener('click', function () {
    var triangleHeight = document.getElementById('triHeight').value;
    new Triangle(triangleHeight);
})
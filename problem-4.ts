//Define a union type Circle and Rectangle, where each type has a unique shape property. Create a 
//function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle = {
    shape: 'circle';
    radius: number;

}

type Rectangle = {
    shape: 'rectangle';
    length: number;
    width: number;
}

type Shape = Circle | Rectangle;


function calculateShapeArea(value: Shape): number {

    //type guard diye bujbe which shape it is.
    if (value.shape === 'circle') {
        return Math.PI * Math.pow(value.radius, 2);
    }

    else if (value.shape === 'rectangle') {
        return value.length * value.width;
    }

    else {
        throw new Error('Invalid');
    }

}

const circleArea: number = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea: number = calculateShapeArea({
    shape: "rectangle",
    length: 4,
    width: 6,
});

console.log(circleArea);
console.log(rectangleArea);


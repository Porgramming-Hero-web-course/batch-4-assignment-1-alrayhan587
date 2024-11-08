//Write a generic function getProperty that takes an object and a property name as arguments
// and returns the property value. Add a constraint to ensure the property name exists on the object.


const person = {
    name: "Alice",
    age: 25,
    isStudent: true,
};


function getProperty<T, P extends keyof T>(obj: T, pro: P): T[P] {
    return obj[pro];
}


const personName=getProperty(person, "name");
console.log(personName);


class Person {

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    greet() {
        return `hi sir , my name is ${this.name} and ${this.id} is my id number .`
    }
}

class Employee extends Person {
    constructor(name, id, role) {
        super(name, id);
        this.role = role;
    }
    newGreet() {
        return `hi sir , my name is ${this.name} , ${this.id} is my id number and i'm a ${this.role} at this company.`
    }
}

const oldEmployeeInfo = new Person("yogesh", 'BC19033',);
const newEmployeeInfo = new Employee("yogesh", 'BC19033', "frontend developer");


console.log(oldEmployeeInfo.greet());
console.log(newEmployeeInfo.newGreet());

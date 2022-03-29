'use strict';

// const Person = function(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never create a method inside a constructor function
//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear);
//     // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// // 1. New {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda);
// console.log(jack);

// console.log(jonas instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge= function() {
//         console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // prototype of linked Object

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// console.log(jack.hasOwnProperty('calcAge')); // it is not a property of Person, it is created with prototype

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3]; // new Arrat === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x=> x+1);


///////////////////////////////////////////////////

// ES6 Classes

// class expressions

// const PersonCl = class {}

// class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     // Instance methods
//     // Methods will be added to .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     // Set a property that already exist
//     set fullName(name) {
//         console.log(name)
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static methods

//     static hey() {
//         console.log('Hey there 👋');
//         console.log(this);
//     }


// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.fullName}`);
// }
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens ( we can pass/return functions)
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter Whyte', 1995);
// PersonCl.hey();

// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);


// Object.create

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();


// Inheritance between classes

// Constructor functions

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear)
// };

// const Student = function(firstName, birthYear, course) {
    
//     Person.call(this, firstName,birthYear)
//     this.course = course;
// };

// // Linking prototypes

// Student.prototype = Object.create(Person.prototype)


// Student.prototype.introduce = function() { 
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__)
// console.log(mike.__proto__.__proto__)

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor)

/////////////////////////////////////////////////////////

// Inheritance between Classes: ES6 Classes


// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     // Instance methods
//     // Methods will be added to .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     // Set a property that already exist
//     set fullName(name) {
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static methods

//     static hey() {
//         console.log('Hey there 👋');
//         console.log(this);
//     }
// }

// class StudentCl extends PersonCl{
//     constructor(fullName, birthYear, course) {
//         // Always needs to happen first!
//         super(fullName, birthYear);
//         this.course = course;
//     }; 

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear} years old, but as a student i feel more like ${2037-this.birthYear + 10}`);
//     }
// };

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// Inheritance between classes: Object.create

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthyear)
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// // we can use StudentProto to create new students
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();


// Another Example of Classes

// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
    
    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected Property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;
    
        console.log(`Thanks for opening an account, ${owner}`);
    };

// 3) Public methods

    // Public Interface
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    };
    withdraw(val) {
        this.deposit(-val);
        return this;
    };

    requestLoan(val) {
        // if(this.#approveLoan(val)) {        
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
            return this;
        }
    }

    static helper() {
        console.log('Helper');
    };

    // 4) Private methods

    _approveLoan(val) {
        return true;
    }    
};

const acc1 = new Account('Jonas', 'EUR', 1111 );
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);

// acc1._movements.push(250);
// acc1._movements.push(-140);
console.log(acc1);
console.log(acc1.pin);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);

// Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());


// // Coding challenge #1

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// Car.prototype.acelerate = function() {
//     this.speed+=10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function() {
//     this.speed-=5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// bmw.acelerate();
// bmw.acelerate();
// bmw.acelerate();
// bmw.brake();

// Coding Challenge #2

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     get speedUs() {
//         return this.speed / 1.6;
//     }

//     set speedUs(speed) {
//         this.speed = speed * 1.6;        
//     }

    // acelerate() {
    //     this.speed+=10;
    //     console.log(`${this.make} is going at ${this.speed}km/h`);
    // }
    // brake() {
    //     this.speed-=5;
    //     console.log(`${this.make} is going at ${this.speed}km/h`);
    // }
// }

// const ford = new CarCl('Ford', 120);

// console.log(ford.speedUs);
// ford.acelerate();
// ford.acelerate();
// ford.brake();

// ford.speedUs = 50;
// console.log(ford);


// Coding Challenge #3

// const Car = function(make, speed) {
   
//     this.make = make;
//     this.speed = speed;
// };


// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// };

// EV.prototype.brake = function() {
//     this.speed-=5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// }

// EV.prototype.acelerate = function() {
    
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// };

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
//     console.log(`Battery charget to ${this.charge}`);
// };
// const tesla = new EV('Tesla', 120, 30);
// console.log(tesla);

// tesla.acelerate();
// tesla.acelerate();
// tesla.acelerate();
// tesla.acelerate();
// tesla.chargeBattery(100);
// tesla.acelerate();
// tesla.acelerate();
// tesla.brake();
// tesla.brake();

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

// Coding Challenge #4

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };
    // acelerate(){
    //     this.speed +=10;
    // };
    // brake() {
    //     this.speed -=5;
    // };
}

class EVCL extends CarCl{
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    };

    chargeBattery(chargetTo) {
       this.#charge = chargetTo; 
       return this;
    };

    acelerate() {
        this.speed +=10;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    };
    brake() {
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);       
        return this;
    };
}
 const rivian = new EVCL('Rivian', 120, 23);
 rivian.chargeBattery(50).acelerate().brake().acelerate().brake();
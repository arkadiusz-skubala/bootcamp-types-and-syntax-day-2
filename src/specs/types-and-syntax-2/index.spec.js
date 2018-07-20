describe('default parameters - types and syntax - day 2', () => {
    it('defines objects precisely', function(){
        var zakk = {
                name: "Zakk",
                getName: function(){
                    return this.name;
                }
            },
            instances = [
                zakk instanceof String,
                zakk instanceof Number,
                zakk instanceof Boolean,
                zakk instanceof Symbol,
                zakk instanceof Array,
                zakk instanceof Object,
                zakk instanceof Function
            ];

        expect(typeof zakk).toEqual( /* YOUR ANSWER HERE */ );

        /* SWAP THE INDEX 99 TO THE CORRECT VALUE */
        expect(instances[99]).toEqual(true);
    });
})

describe('creating own object with properties and methods - types and syntax - day 2', () => {
    var car;

    beforeEach(function(){
        // define the car object (properties and methods) to pass the following tests
        car = {
            /* ... */
        };
    })

    it('checking properties structure', function() {
        expect(car.hasOwnProperty("name")).toBeTruthy();
        expect(typeof car.name).toEqual("string");

        expect(car.hasOwnProperty("model")).toBeTruthy();
        expect(typeof car.model).toEqual("string");

        expect(car.hasOwnProperty("color")).toBeTruthy();
        expect(typeof car.color).toEqual("string");

        expect(car.hasOwnProperty("engineRunning")).toBeTruthy();
        expect(typeof car.engineRunning).toEqual("boolean");
    });

    it('checking methods structure', function() {
        expect(car.hasOwnProperty("startEngine")).toBeTruthy();
        expect(typeof car.startEngine).toEqual("function");

        expect(car.hasOwnProperty("stopEngine")).toBeTruthy();
        expect(typeof car.stopEngine).toEqual("function");

        expect(car.hasOwnProperty("changeColor")).toBeTruthy();
        expect(typeof car.changeColor).toEqual("function");

        expect(car.hasOwnProperty("fly")).toBeFalsy();
        expect(typeof car.fly).toEqual("undefined");
    });

    it('checking initial properties', function() {
        expect(car.engineRunning).toBe(false);
    });

    it('checking methods logic', function() {
        spyOn(car, "startEngine").and.callThrough();
        spyOn(car, "changeColor").and.callThrough();
        spyOn(car, "stopEngine").and.callThrough();

        car.startEngine();
        expect(car.startEngine).toHaveBeenCalled();
        expect(car.engineRunning).toBeTruthy();

        car.changeColor("orange");
        expect(car.changeColor).toHaveBeenCalled();
        expect(car.color).toEqual("orange");

        car.stopEngine();
        expect(car.stopEngine).toHaveBeenCalled();
        expect(car.engineRunning).toBeFalsy();
    });
    it('extending an object with new properties', function() {
        // Create an object (named newCar) based on the car object using the Object.create() method
        // Extend the created object with properties and methods

        var newCar = Object.create(car);
        /* add properties and methods to the newCar object */

        spyOn(newCar, 'startClimatronic').and.callThrough();
        spyOn(newCar, 'stopClimatronic').and.callThrough();

        // properties
        expect(newCar.hasOwnProperty("climatronicOn")).toBeTruthy();
        expect(typeof newCar.climatronicOn).toEqual("boolean");

        // methods
        expect(newCar.hasOwnProperty("startClimatronic")).toBeTruthy();
        expect(typeof newCar.startClimatronic).toEqual("function");

        expect(newCar.hasOwnProperty("stopClimatronic")).toBeTruthy();
        expect(typeof newCar.stopClimatronic).toEqual("function");

        expect(newCar.hasOwnProperty("startEngine")).toBeFalsy();
        expect(newCar.hasOwnProperty("stopEngine")).toBeFalsy();

        // initial values
        expect(newCar.climatronicOn).toBeFalsy();

        // running methods
        newCar.startClimatronic();
        expect(newCar.startClimatronic).toHaveBeenCalled();
        expect(newCar.climatronicOn).toBeTruthy();

        newCar.stopClimatronic();
        expect(newCar.startClimatronic).toHaveBeenCalled();
        expect(newCar.climatronicOn).toBeFalsy();
    });
})

describe('hoisting - types and syntax - day 2', () => {
    var logMemory;
    function log(){
        var args = Array.prototype.slice.call(arguments);
        logMemory = logMemory.concat(args);
    }

    beforeEach(function(){
        logMemory = [];
    });

    it('should create undefined before variable initialization', function(){
        log(a, b, c);
        var a = 1;
        var b;
        var c = 3;
        log(a, b, c);

        expect(logMemory).toEqual( /* YOUR ANSWER HERE */ );
    });

    it('should create variables per function memory frame', function(){
        var a;
        (function(){
            log(a);
            var a = 1;
            log(a);
        }());
        log(a);

        expect(logMemory).toEqual( /* YOUR ANSWER HERE */ );
    });

    it('should create undefined before function initialization', function(){
        expect(typeof Add).toEqual( /* YOUR ANSWER HERE */ );

        var Add = function(a, b) {
            return a + b;
        }

        expect(typeof Add).toEqual( /* YOUR ANSWER HERE */ );
    });
})

describe('creating functions with constructors - types and syntax - day 2', () => {
    var CarConstructor;
    beforeEach(function(){
        //define the CarConstructor (it should take three parameters - name, model and color)
        CarConstructor = function(/* arguments */){
            /* properties and methods */
        }
    });
    it('should have own properties', function(){
        // create car passing the name, model and color to the ColorConstructor (using the 'new' operator)
        var car;
        expect(car.name).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.model).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.color).toEqual( /* YOUR ANSWER HERE */ );
    });

    it('should have own methods', function(){
        // create car passing the name, model and color to the ColorConstructor (using the 'new' operator)
        var car;
        expect(car.hasOwnProperty("getName")).toEqual(true);
        expect(car.hasOwnProperty("getModel")).toEqual(true);
        expect(car.hasOwnProperty("changeColor")).toEqual(true);
    });

    it('checking methods logic', function(){
        // create car passing the name, model and color to the ColorConstructor (using the 'new' operator)
        var car;
        spyOn(car, "changeColor").and.callThrough();

        expect(car.getName()).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.getModel()).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.color).toEqual( /* YOUR ANSWER HERE */ );
        car.changeColor("orange");
        expect(car.changeColor).toHaveBeenCalled();
        expect(car.color).toEqual( /* YOUR ANSWER HERE */ );
    });
})

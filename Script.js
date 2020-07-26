/*

//Function Construtor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

var John  = new Person('John', 1990, 'Developer');
console.log(John);


var Mark = new Person('Mark', 1996, 'Tailor');
console.log(Mark);
var Jane = new Person('Jane', 1998, 'HouseKeeper');
console.log(Jane);



// Inheriting from the constructor's prototype
// Methods and Properties should always be in the constructors 
// prototype property

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth)
}
John.calculateAge();
Mark.calculateAge();
Jane.calculateAge();

//properties

Person.prototype.lastname = 'Maulid';

console.log(John.lastname);
console.log(Mark.lastname);
console.log(Jane.lastname);

*/




/*
//Creating Constructor Prototype using
//OBJECT.CREATE

var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
}

var John = Object.create(personProto,
    {
        name:{value: 'John'},
        yearOfBirth:{value:1996},
        Job:{value:'GarbageColector'},
     

    });

    var Jane = Object.create(personProto);
    Jane.name = 'Jane';
    Jane.yearOfBirth = '1990';
    Jane.Job = 'Designer';

    John.calculateAge();
    Jane.calculateAge();

    */

    //Passing functions as arguments

    var years = [1990, 1995, 2005, 1997, 1996];

    function arrayCalc(arr, fn){
        var arrRes = [];

        for(var i = 0; i <arr.length; i++){
            arrRes.push(fn(arr[i]));

        }
        return arrRes;
    }

    function calculateAge(el){
        return 2020 - el;
    }

    var age = arrayCalc(years, calculateAge);
    console.log(age);

    function isFullAge(el){
        return el >= 18;

    }
    var fullAge = arrayCalc(age, isFullAge);
    console.log(fullAge);

    function maxHeartRate(el){
        if(el>=18 && el<=81){
            return Math.round(206.9 - (0.67 * el));
        }else{
            return -1;
        }
 
    }
    var heart = arrayCalc(age,maxHeartRate);
    console.log(heart);



    //Bind method in Javascript

    var c1 = {
        x: 12,
        y: 20
    }
    var c2 = {
        x: 35,
        y:10
    }

    function printCoordinates(){
        console.log(this.x + ' , ' + this.y);
    }
    //printCoordinates();

   var coord = printCoordinates.bind(c1);
   coord();

   var coord2 = printCoordinates.bind(c2);
   coord2();


   ///call method in Javascript

   function printNames(first, last){
       console.log(`${first} ${last}`);
       console.log(this)
   }

   printNames.call({
       Model: 'Samsung',
       color: 'Black'
   }, 'Maulid', 'Abdullahi');


    


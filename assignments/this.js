/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding- look to the left of .call
* 2.Explict Binding- telling a function what the context of the this key word is going to be using .call,.apply,.bind. 
* 3. new Binding- whenver you have a function invoked with a new keyword, the .this keyword is bounded to the new object that is being constructed. 
* 4. window Binding- if none of the following rules apply, then the this keyword will default to the window object , unless you are in strict mode then it will be undefined.   
*
* write out a code example of each explanation above
*/

// Principle 1
function ex(){
    console.log(this);
    return 0;
}ex(); 

// Principle 2
var sayEzName = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    };
};

var me = {
    name: 'Tyler',
    age: 23
};

var you = {
    name: 'Kelly',
    age: 25
};
sayEzName(me);
sayEzName(you);

me.sayName();
you.sayName();
// code example for Implicit Binding

// Principle 3
function techGod(name,age,language){
    function godScript(){
        this.name = name;
        this.age = age;
        this.language = language;
        console.log('My name is ${this.name}, My age is ${this.age} and my language prefernce is ${this.language}.');
    }godScript();
}

const godlyOne = new techGod("Hoopus",19,"Python");
// code example for New Binding

// Principle 4
var sayName = function(color1, color2, color3){
console.log('My name is ' + this.name + ' and my favorite colors are ' + color1 + ', ' + color2 + ',and ' + color3);
};

var tyler ={
    name: 'Tyler'
};

var colors = ['Blue','Red','Green'];

sayName.apply(tyler, colors);
// code example for Explicit Binding

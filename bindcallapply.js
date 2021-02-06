//bind , call , applly

//bind : borrow method of different object, create a method by using another object method-- use bind()

const person = {
    firstName : "Khalid",
    lastName : "mahfuz",
    salary : 15000,
    fullName : function(){
        const fullname = this.firstName + " " + this.lastName;
        return fullname;
    },
    chargBill : function(charge1,tips1){
        this.salary = this.salary - charge1 - tips1;
        return this.salary;
    }
}

console.log(person.fullName())

const secondperson = {
    firstName : "safia",
    lastName : "nusrat",
    salary : 30000
}

//now use bind() to borrow a method from person object
const secondfullName = person.fullName.bind(secondperson);
console.log(secondfullName())

//bind() a function with parameter
const secondSalary = person.chargBill.bind(secondperson);
console.log(secondSalary(2000,500))

//use call() , the paramteres are comma separated
person.chargBill.call(secondperson,10000,300);
console.log(secondperson.salary)
//use apply(), the paramater is an array
const chargeArr = [700,50];
person.chargBill.apply(secondperson,chargeArr);
console.log(secondperson.salary)

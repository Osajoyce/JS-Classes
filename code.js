class  animal {
constructor(name, age, color, legs){
this.name = name
this.age = age
this.color = color
this.legs = legs
}
getAnimalInfo(){

    let info = `The name of this animal is ${this.name}. It is ${this.age} years old. The colour of its skin is ${this.color} and it has ${this.legs} legs`
    return info
}
}

const Animal = new animal('Tiger',2,'brown','swift')
console.log(Animal)
console.log(Animal.getAnimalInfo())

class dog extends animal{
    typeSomething(){

    }
}
const child1 = new dog('Lhasa',4,'brown','k-shaped')
console.log(child1)
console.log(child1.getAnimalInfo())

class cat extends animal{
    constructor(name, age, color, legs, gender){
        super(name, age, color, legs)
        this.gender= gender
    }
    
    getAnimalInfo(){
        let pronoun = this.gender == 'male' ?'He' :'she'
        let info = `The name of this animal is ${this.name}. It is ${this.age} years old. The colour of its skin is ${this.color} and it has ${this.legs} legs. ${pronoun} is very friendly and cute.`
        return info
    }
}
const child2 = new cat('pussy',1,'cream','short','female')
console.log(child2)
console.log(child2.getAnimalInfo())

//create a person account class
class PersonAccount {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.incomes = new Map();
      this.expenses = new Map();
    }
  
    addIncome(description, amount) {
      this.incomes.set(description, amount);
    }
  
    addExpense(description, amount) {
      this.expenses.set(description, amount);
    }
  
    totalIncome() {
      let total = 0;
      for (const amount of this.incomes.values()) {
        total += amount;
      }
      return total;
    }
  
    totalExpense() {
      let total = 0;
      for (const amount of this.expenses.values()) {
        total += amount;
      }
      return total;
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  
    accountInfo() {
      return `${this.firstName} ${this.lastName}'s account balance is ${this.accountBalance()}.`;
    }
  }

  const person = new PersonAccount('Jane','brown')
person.addIncome("Salary", 3000)
person.addIncome("Bonus", 1000)
person.addExpense("Rent", 2000)
person.addExpense("Groceries", 500)
   
console.log(person.accountInfo())
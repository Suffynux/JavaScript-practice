// Excercise in JavaScript
// OOP in JavaScript
// 1. Encapsulation

class BankAccount {
    #balance = 0;
    getDeposit(amount){
      this.balance +=this.amount;
      return this.balance;
    }
    getBalance () {
      return this.#balance
    }
  }
    let myBalance = new BankAccount();
  console.log(myBalance.getBalance())
  // Points to remember
  /*
  In Encapsulation, we have to use private variables and methods to access them and we use the data according to our need.In the above example we hide the balance and shows only when we need in deposit and getbalance 
  */



  
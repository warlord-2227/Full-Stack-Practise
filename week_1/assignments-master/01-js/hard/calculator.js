/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator 
{
  constructor (){
    //removes spaces
    // this.input = input.replace('/\s/g','');
    this.result = 0;
    this.left_parant = [];
    this.right_parent = [];
    this.correct = true;
    this.addition = [];
    this.substraction = [];
    this.multiplication = [];
    this.divison = [];
    this.digit = [];
    //this.garbage = [];

  }
  findsequence()
  {
    for (let i =0; i< this.input.length;i++){
      if (this.input[i] == "(" )
      {
        this.left_parant.push(i)  
      }
      else if(this.input[i]==")")
      {
        this.right_parent.push(i)
      }
      else if (this.input[i]=="+")
      {
        this.addition.push(i)
      }
      else if (this.input[i]=="-")
      {
        this.substraction.push(i)
      }
      else if (this.input[i]=="*")
      {
        this.multiplication.push(i)
      }  
      else if (this.input[i]=="/")
      {
        this.divison.push(i)
      }
      else if (this.isDigit(this.input[i]))
      {
        this.digit.push(i)
      }
      else
      {
        this.correct = false
      }

    }
  }
  isDigit(char)
  {
    return /\d/.test(char)
  }
  clear()
  {
    this.result = 0
  }
  add(num)
  {
    this.result += num
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num)
  {
    this.result = (this.result*num)
  }
  divide(num)
  {
    if (num !=0){
      this.result = (this.result/num)
    }
    else{
      console.log("You can't devide a number by zero");
      throw new Error("Cannot divide by zero");
    }
  
  }
  getResult()
  {
    return this.result 
  }
  calculate(expression){
    this.result = eval(expression.trim());
    if (!Number.isFinite(this.result)){
      throw new Error();
    }

  }
}



module.exports = Calculator;

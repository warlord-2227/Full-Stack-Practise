/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor()
  {
    this.result = [];
  }
add(task)
{
  this.result.push(task)
}
remove(index)
{
  if (index >= this.result.length)
  {
    console.log("Wrong index and we can't remove any todo associated with it");
    return this.result
  }
  else
  {
   this.result.splice(index,1);
   //return this.result 
  }
}
update(index,item)
{
  if (index < this.result.length)
  {
   this.result.splice(index,1,item);
  
  }
  //return this.result
}
getAll()
{
  return this.result
}
get(index)
{
  if (index < 0 || index >= this.result.length )
  {
    console.log("Invalid index");
    return null;
  } 
  return this.result[index]
  // let default = -1 ;
  // for (let i=0;i<this.result.length;i++)
  // {

  // }
}
clear(){
  this.result = [];
}
}

module.exports = Todo;

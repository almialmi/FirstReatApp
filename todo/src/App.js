import React from 'react';
import './style.css';
import TodoItems from './components/TodoItems';
import todoDatas from './todoData';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos:todoDatas
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState =>{
      const updateTodos = prevState.todos.map(todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos:updateTodos
      }
    })
  }
   
    render(){
     const todoItems = this.state.todos.map(item => <TodoItems key={item.id} item={item} handleChange={this.handleChange} />)
      return (
        <div className="todo-list">
          {todoItems}
        </div>
      );

    }
    
}
export default App;

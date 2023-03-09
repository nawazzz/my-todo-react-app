import './App.css';
import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textEntered: "",
      allTodo: [],
      completedTodo: []
    }
  }

  deleteTodo = (elm) => {
    const deletedList = this.state.allTodo.filter((item, index) => {
      if (elm.id !== item.id) {
        return true
      }
    })
    this.setState({
      allTodo: deletedList
    })
  }

  markAsDone = (elm) => {
    const doneTodo = this.state.allTodo.map((item, index) => {
      if (elm.id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }
      return item
    })
    this.setState({
      allTodo: doneTodo
    })
  }

  render() {
    return(      <React.Fragment>
      <div className='mainTodoContainer'>
        <h1>todos</h1>
        <div className='inputParentContainer' >
          <input 
            type={"text"} 
            value={this.state.textEntered} 
            placeholder='What needs to be done?'
            onChange={this.handleTextEntered}
            onKeyPress={this.handleTodo}
          />
          <span
            onClick={this.clearInput}
            className="clearInput"
          >x</span>
        </div> 
        <List 
          textEntered={this.state.textEntered} allTodo={this.state.allTodo}
          deleteTodo={this.deleteTodo} markAsDone={this.markAsDone}
        /> 
      </div>        
    </React.Fragment>
    )
  }
}

export default App;

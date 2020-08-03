import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component {
  state = {
    elements: [
      { id: '123', isCompleted: true, title: 'Zrob zakupy'},
      { id: '234', isCompleted: false, title: 'Posprzataj'}
    ],
    inputValue: ''
  }

  markCompleted(id) {
    const idx = this.state.elements.findIndex(x => x.id === id)
    const newElements = this.state.elements
    newElements[idx].isCompleted = true

    this.setState({
      elements: newElements
    })
  }

  inputHandler(event) {
    const newValue = event.target.value

    this.setState({
      inputValue: newValue
    })
  }

  addItem() {
    const item = {
      id: Math.random(),
      title: this.state.inputValue
    }

    const newElements = [item, ...this.state.elements]

    this.setState({
      elements: newElements,
      inputValue: ''
    })
  }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} markClicked={this.markCompleted.bind(this)}/>
    })

    return (
      <div>
        TODO APP
        <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)} />
        <button onClick={this.addItem.bind(this)}>Dodaj zadanie</button>
        {elements}
      </div>
    )
  }
}

export default Todo;

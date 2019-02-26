import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {

  getStyle = () => {
      return{
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc solid',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
  }

  markComplete = (e) => {
    console.log(this.props)
  }

  render() {

     const {id, title} = this.props.todo; 

     return(
         <div style={this.getStyle()}>
             <p>
                 <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                 {title }
                 <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
             </p>
         </div>
     )
  }
}

//prop types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '20%',
    cursor: 'pointer',
    float: 'right',
    fontSize: '20px'
}

export default Todoitem;
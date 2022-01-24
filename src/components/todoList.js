import React, { Component, useContext, useState } from 'react';
import { ThemeContext } from '../context/themeContext';
import { TodoListContext } from '../context/todoListContext';
/*
class TodoList extends Component {
    state = {  } 
    static contextType = ThemeContext;
    render() { 
        const { isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div className='ui list' style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center', 'marginTop': '0px'}}>
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping</p>
                <p className='item'>Go for a walk</p>
                <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
            </div>
        );
    }
};
*/

//Alternative way to use context api in functional component
const TodoList = () => {
    const [todo, setTodo] = useState('');

    const { todos, addTodo, removeTodo } = useContext(TodoListContext)
    const { isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };

    const handleRemoveTodo = (e) => {
        removeTodo(e.target.id);
    }

    return (
        <div className='ui list' style={{ background: theme.background, color: theme.text, textAlign: 'center', 'marginTop': '0px'}}>
                {
                    todos.length ? (
                        todos.map((todo) => {
                            return(
                                <p id={todo.id} onClick={handleRemoveTodo} key={todo.id} className='item'>{todo.text}</p>
                            )})
                    ) : (
                        <div>You have no todos</div>
                    )
                }
                
                {/* <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping</p>
                <p className='item'>Go for a walk</p> */}
                <form onSubmit={handleFormSubmit} >
                    <label htmlFor='todo'>Add Todo</label>
                    <input id='todo' type='text' onChange={handleChange}/>
                    <input type='submit' value='Add new todo' className='ui button primary' />
                </form>


                <button className='ui button primary' onClick={changeTheme}>Change the theme</button>

            </div>
    );
};
 
export default TodoList;

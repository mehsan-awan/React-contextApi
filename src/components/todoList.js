import React, { Component } from 'react';
import { ThemeContext } from '../context/themeContext';

class TodoList extends Component {
    state = {  } 
    static contextType = ThemeContext;
    render() { 
        const { isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div className='ui list' style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center', 'margin-top': '0px'}}>
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping</p>
                <p className='item'>Go for a walk</p>
                <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
            </div>
        );
    }
}
 
export default TodoList;

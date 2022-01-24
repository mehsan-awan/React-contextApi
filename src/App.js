import React from 'react';
import Navbar from './components/navbar';
import TodoList from './components/todoList';
import './index.css'
import ThemeContextProvider from './context/themeContext';
import AuthContextProvider from './context/authContext';
import TodoListContextProvider from './context/todoListContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
          <TodoListContextProvider>
          <AuthContextProvider>
            <Navbar />
            <TodoList />
          </AuthContextProvider>
          </TodoListContextProvider>
        </ThemeContextProvider>
      </div> 
    </div>
  );
}

export default App;

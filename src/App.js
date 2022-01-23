import React from 'react';
import Navbar from './components/navbar';
import TodoList from './components/todoList';
import './index.css'
import ThemeContextProvider from './context/themeContext';
import AuthContextProvider from './context/authContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <TodoList />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div> 
    </div>
  );
}

export default App;

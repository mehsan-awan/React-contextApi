import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { AuthContext } from '../context/authContext';

/*
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            // This approch works in both functional and class components.
            // This allow multiple context 

            <AuthContext.Consumer>{(authContext) => {            
                return (         
                    <ThemeContext.Consumer>{(themecontext) => {
                        const { isDarkTheme, darkTheme, lightTheme} = themecontext;
                        const { isLoggedIn, changeAuthStatus } = authContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme;
                        return (
                            <nav style={{ background: theme.background, color: theme.text, height: '140px'}}>
                                <h2 style={{color:theme.text,  textAlign:'center' }} className='ui centered header'>
                                    Oak Academy
                                </h2>
                                <p style={{textAlign:'center'}} onClick={ changeAuthStatus } >{ isLoggedIn ? 'Logged in' : 'Logged out' }</p>
                                <div className='ui three buttons'>
                                    <button className='ui button'>Overview</button>
                                    <button className='ui button'>Contact</button>
                                    <button className='ui button'>Support</button>
                                </div>
                            </nav>
                        )
                        }}
                    </ThemeContext.Consumer>
                )
                }}
            </AuthContext.Consumer>
        );
    }
}
*/

// Alternative approch using useContext hook
const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme} = useContext(ThemeContext)
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext)
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <nav style={{ background: theme.background, color: theme.text, height: '140px'}}>
            <h2 style={{color:theme.text,  textAlign:'center' }} className='ui centered header'>
                Oak Academy
            </h2>
            <p style={{textAlign:'center'}} onClick={ changeAuthStatus } >{ isLoggedIn ? 'Logged in' : 'Logged out' }</p>
            <div className='ui three buttons'>
                <button className='ui button'>Overview</button>
                <button className='ui button'>Contact</button>
                <button className='ui button'>Support</button>
            </div>
        </nav>
    )
}

export default Navbar;
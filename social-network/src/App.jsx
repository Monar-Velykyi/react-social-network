import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Navbar />
                <div className="app-wrapper-main">
                    <Route path="/dialogs" render={() => <Dialogs 
                    personData={props.state.personData} 
                    dispatch={props.dispatch}/>} />
                    <Route path="/main" render={() => <Main 
                    postsData={props.state.postsData} 
                    dispatch={props.dispatch}/>} />
                    <Route path="/users" render={() => <Users 
                    usersData={props.state.usersData}
                    dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
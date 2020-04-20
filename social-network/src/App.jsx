import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
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
                    <Route path="/users" render={() => <UsersContainer 
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
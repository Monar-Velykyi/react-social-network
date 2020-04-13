import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

    // const url = "http://numbersapi.com/random/year?json";

    // async function getNumbers() {
    // const response = await fetch(url);
    // const data = await response.json();
    // }

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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
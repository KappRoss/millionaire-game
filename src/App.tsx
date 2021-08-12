import React from 'react';
import Layout from "./components/Layout";
import {Switch, Route, Redirect} from "react-router-dom";
import GameStart from "./pages/gameStart";
import Game from "./pages/game";
import GameOver from "./pages/gameOver";
import {buttonStyle, Context} from './data/context'

function App() {
    // background: '#F5F5F7'
    return (
        <Context.Provider value={buttonStyle}>
            <Layout>
                <Switch>
                    <Route path={'/game-over'} component={GameOver}/>
                    <Route path={'/game'} component={Game}/>
                    <Route path={'/'} component={GameStart}/>
                    <Redirect to={'/'}/>
                </Switch>
            </Layout>
        </Context.Provider>

    );
}

export default App;

import React from 'react';
import Layout from "./components/Layout";
import {Switch, Route, Redirect} from "react-router-dom";
import GameStart from "./pages/gameStart";
import Game from "./pages/game";
import GameOver from "./pages/gameOver";


function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/game-over'} exact component={GameOver}/>
                <Route path={'/game'} component={Game}/>
                <Route path={'/'} component={GameStart}/>
                <Redirect to={'/'} />
            </Switch>
        </Layout>
    );
}

export default App;

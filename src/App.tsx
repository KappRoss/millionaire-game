import React from 'react';
import Layout from "./components/Layout";
import {Switch, Route, Redirect} from "react-router-dom";
import GameStatus from "./pages/gameStatus";
import Game from "./pages/game";

const App = () => (
    <Layout>
        <Switch>
            <Route path={'/game-over'} component={GameStatus}/>
            <Route path={'/game'} component={Game}/>
            <Route path={'/'} component={GameStatus}/>
            <Redirect to={'/'}/>
        </Switch>
    </Layout>
);

export default App;

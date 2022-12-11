import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path='/pricing' conponent={Pricing} />
                    <Route exact path='/' component={Landing} />
                </Switch>
                </main>
            </BrowserRouter>
        </StylesProvider>
    </div>
};
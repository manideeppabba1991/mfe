import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'marketing',
});

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route exact path='/pricing' component={Pricing} />
                        <Route exact path='/' component={Landing} />
                    </Switch>
                </main>
            </BrowserRouter>
        </StylesProvider>
    </div>
};
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import NotFoundPage from './components/NotFound/NotFoundPage';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' exact component={Join} />
                    <Route path='/chat' component={Chat} />
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
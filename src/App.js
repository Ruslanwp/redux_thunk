import {Fragment, useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';
import { Profile } from './components/Profile';
import { News } from './components/News';

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const selectedUser = useSelector(state => state.loggedUser);

  console.log(selectedUser);

  const loginRedirectHandler = () => {
    setInitialLoad(false);
  }

  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          main
        </Route>
        <Route path="/login">
          {selectedUser && (
            <SignOut
              initialLoad={initialLoad}
              loginRedirectHandler={loginRedirectHandler}
            />
          )}
          {!selectedUser && <SignIn/>}
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          Page not found
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

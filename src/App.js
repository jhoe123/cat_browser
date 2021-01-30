
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

import Home from './containers/Home';
import Profile from './containers/Profile';
import './css/App.scss';
import store from './utils/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/:imageId">
              <Profile/>
            </Route>
            <Route path="/?breed">
              <Home/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

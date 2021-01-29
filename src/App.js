
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './containers/pages/Home';
import logo from './resources/logo.svg';
import './css/App.css';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}

export default App;

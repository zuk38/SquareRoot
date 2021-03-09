import './App.css';
import './App.sass';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit);

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/welcome" component={Welcome} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;

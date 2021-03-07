import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;

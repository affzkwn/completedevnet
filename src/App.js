
import './App.css';
import { Home } from './Home';
import { Employee } from './Employee';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App container">
      <h3 className='d-flex justify-content-center m-3'>
        Freelance Management
      </h3>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink exact className='btn btn-light btn-outline-primary' to="/home">
              Home
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className='btn btn-light btn-outline-primary' to="/employee">
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>
        <Switch>
          <Route path='/home' component ={Home}/>
          <Route path='/employee' component ={Employee}/>
          <Redirect exact from="/" to="/home" />
        </Switch>
    </div>
    </Router>
  );
}

export default App;

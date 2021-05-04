import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import SendCodeToCustomer from './SendCodeToCustomer';
import CheckCodeFromCustomer from './CheckCodeFromCustomer';

function App() {
    /* Webentwicklung - Ackermann - page 307 Routing *

     */
    return (
            <authentifaction>
                <Router>
                    <Switch>
                        <Route path="/SendCodeToCustomer">
                            <SendCodeToCustomer/>
                        </Route>
                        <Route path="/CheckCodeFromCustomer">
                            <CheckCodeFromCustomer/>
                        </Route>
                        <Route path="/" exact>
                            <Redirect to="/SendCodeToCustomer"/>
                        </Route>
                    </Switch>
                </Router>

            </authentifaction>
        )

    /* return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ); */
}

export default App;

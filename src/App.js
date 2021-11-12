import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AuthContext from './Context/AuthContext';
import Register from './Pages/Register';
import AllProducts from './Pages/AllProducts';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/explore'>
              <AllProducts />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;

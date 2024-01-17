import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AuthContext from "./Context/AuthContext";
import Register from "./Pages/Register";
import AllProducts from "./Pages/AllProducts";
import PrivateRoute from "./ProtectedRoute/PrivateRoute";
import PurchaseOrder from "./Pages/PurchaseOrder";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Components/Profile/Profile";
import Navigation from "./Components/Shared/Navigation";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/settings">
              <Profile />
            </PrivateRoute>
            <Route path="/explore">
              <AllProducts />
            </Route>
            <PrivateRoute path="/purchase">
              <PurchaseOrder />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;

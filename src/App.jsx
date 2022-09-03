import Home from "../src/pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Pay from "./pages/Pay";
import PaySuccess from "./pages/PaySuccess";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);


  console.log(user);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">{!user ? <Redirect to="/" /> : <Cart />}</Route>
        <Route path="/logIn">{user ? <Redirect to="/" /> : <LogIn />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/paysuccess">
          <PaySuccess />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

import Home from "../src/pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pay from "./pages/Pay";
import PaySuccess from "./pages/PaySuccess";

const App = () => {
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
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/logIn"><LogIn/></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/pay">
          <Pay/>
        </Route>
        <Route path="/paysuccess">
          <PaySuccess/>
        </Route>
      
      </Switch>
    </Router>
  );
};

export default App;

import './App.css';
import NavHeader from './components/NavHeader';
import Welcome from './components/Welcome';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Quotes from './components/Quotes';
import NotFound from './components/NotFound';
import {Redirect, Route, Switch} from 'react-router-dom';
import FormValidations from './components/FormValidations';
import Swapi from './components/Swapi';
import Users from './components/Users';
import Redux from './components/redux';
const App = ()=> {
  // JSX - Java Script XML
  return (
    <div className="App">
      <NavHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome/>
          </Route>
          <Route path="/quotes">
          <Redirect to="/quoting" />
          </Route>
          <Route path="/quoting">
            <Quotes/>
          </Route>
          <Route path="/products" exact>
            <Products/>
          </Route>
          
          <Route path="/products/:productId">
            <ProductDetails/>
          </Route>
          <Route path="/form-validations">
            <FormValidations/>
          </Route>
          <Route path="/swapi">
            <Swapi/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/redux">
            <Redux/>
          </Route>
          
          <Route path="*">
            <NotFound/>
          </Route>
          
          
        </Switch>

      </main>

    </div>
  );
}

export default App;

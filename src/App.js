import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import OrderRevew from './components/OrderRevew/OrderRevew';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderRevew></OrderRevew>
          </Route>
          
        </Switch>
      </Router>
      <Shop></Shop>
    </div>
  );
}

export default App;

import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import { Router, Route, Switch} from 'react-router';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );
}

export default App;
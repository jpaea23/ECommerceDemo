import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router';
import  { CartProvider } from './hoc/Context/CartContext';
import Confirmation from './components/Confirmation/Confirmation';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/confirmation" component={Confirmation}/>
        </Switch>
      </Layout>
    </CartProvider>
  );
}

export default App;
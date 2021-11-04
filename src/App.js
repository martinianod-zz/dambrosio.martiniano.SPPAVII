import './App.css';
import 'bulma/css/bulma.css'
import Detalle from './pages/Detalle';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="*" />
        <Error404 />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;

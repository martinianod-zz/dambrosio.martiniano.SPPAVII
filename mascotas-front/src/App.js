import './App.css';
import 'bulma/css/bulma.css'
import Detalle from './pages/Detalle';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

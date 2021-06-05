import './App.css'
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Player from './Player';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/play/:id" component={Player}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

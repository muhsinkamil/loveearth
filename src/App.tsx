import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Home } from './pages';
import './App.scss';
import { ContactForm } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-routes">
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
      <ContactForm />
    </div>
  );
}

export default App;

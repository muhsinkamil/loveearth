import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Home, Work } from './pages';
import './App.scss';
import { ContactForm } from './components';
import { ContactFormProvider } from './providers/contact';

function App() {
  return (
    <ContactFormProvider>
      <div className="App">
        <BrowserRouter>
          <div className="app-routes">
            <Switch>
              <Route path="/work" component={Work} />
              <Route path="/about" component={About} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
        <ContactForm />
      </div>
    </ContactFormProvider>
  );
}

export default App;

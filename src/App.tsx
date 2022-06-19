import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Home, Work } from './pages';
import './App.scss';
import { ContactForm } from './components';
import { ContactFormProvider } from './providers/contact';
import HorizontalAbout from './pages/HorizontalAbout/HorizontalAbout';
import ContactPage from './pages/Contact';
import { WorksModalProvider } from './providers/works';

function App() {
  return (
    <ContactFormProvider>
      <div className="App">
        <BrowserRouter>
          <div className="app-routes">
            <Switch>
              <WorksModalProvider>
                <Route path="/work" component={Work} />
              </WorksModalProvider>
              <Route path="/about" component={HorizontalAbout} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
        <ContactPage />
      </div>
    </ContactFormProvider>
  );
}

export default App;

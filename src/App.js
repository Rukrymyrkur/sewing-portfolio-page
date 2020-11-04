import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './pages/HomePage/Projects';
import {
  Navbar,
  Footer,
  Header,
  About,
  Contact,
  Coding
} from './components';
import ScrollToTop from './components/ScrollToTop';

function App({ Component, pageProps }) {
  return (

    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Header} />
      </Switch>
      <Switch>
        <Route path="/projects" exact component={Projects} />
      </Switch>
      <Switch>
        <Route path="/about" exact component={About} />
      </Switch>
      <Switch>
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Switch>
        <Route path="/coding" exact component={Coding} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

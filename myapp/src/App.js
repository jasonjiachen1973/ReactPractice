
import './App.css';
import Main from './component/Main.js'
import About from './component/About'
import Services from './component/Services'
import Header from './component/Header'
import Nav from './component/Nav'
import Footer from './component/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
  <Router>
    <div>
      <Header />
      <Nav />
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
        </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;

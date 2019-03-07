import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home'
import News from './Pages/News'
import Header from './Component/Header'
import Footer from './Component/Footer'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
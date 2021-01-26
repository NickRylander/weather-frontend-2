import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <>
      <Router>
      {/* <Logo /> */}
      <br/>
      {/* <Navbar /> */}
        <div className="container">
          <Switch>
            {/* <Route exact path="/" component={ Home } />
            <Route exact path="/forecast" component={ Forecast } />
            <Route exact path="/favorite" component={ Favorites } /> */}
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}

export default App;

// BrowserRouter: Keeps UI in sync with the URL
// Switch: Renders the first child <Route> that matches the location. Unique in that is renders a route excusively.In contrast, Route matches the location and renders it inclusively
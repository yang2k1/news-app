import React from "react"
import Header from "./Component/common/header/Header"

import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import MainContent from "./Component/MainContent/MainContent";
import Homepages from "./Component/Home/Homepages";
import Homes from "./Component/Home/mainContent/homes/Home";

const App = () => {
  return (
    <>
      <Router>
          <Header />
          <Homes/>
          {/*<Switch>*/}
          {/*    <Route exact path='/' component={Homepages} />*/}
          {/*</Switch>*/}
          {/*<MainContent />*/}
      </Router>
    </>
  );
}

export default App;

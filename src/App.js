import React from "react"
import Header from "./Component/common/header/Header"
import Footer from "./Component/common/footer/Footer"
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Homepages from "./Component/Home/Homepages";


const App = () => {
  return (
    <>
      <Router>
          <Header />
          {/*<TestHome/>*/}
          <Homepages/>
          <Footer/>
      </Router>
    </>
  );
}

export default App;

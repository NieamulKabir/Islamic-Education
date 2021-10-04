
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route

} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import Courses from './components/Courses/Courses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import NotFound from './components/NotFounnd/NotFound';
import Footer from './components/Footer/Footer';
import OurTeams from './components/OurTeams/OurTeams';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/course/:courseId">
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/ourteam">
            <OurTeams></OurTeams>

          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

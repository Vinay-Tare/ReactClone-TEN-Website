import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Hiring from './HiringComponent';
import OnlineCourses from './OnlineCoursesComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const Main = () => {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/hiring" component={Hiring} />
            <Route exact path="/onlinecourses" component={OnlineCourses} />
            <Redirect to="/" />
          </Switch>      
        <Footer />
      </div>
    );
}

export default withRouter(Main);

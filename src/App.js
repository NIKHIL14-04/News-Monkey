import React, { Component } from 'react'
import NewsCompoent from './Componet/NewsCompoent'
import Newsnav from './Componet/Newsnav'
import {
  BrowserRouter as Router,
  Route,
  Switch,
    
  
} from "react-router-dom";
export default class App extends Component {
 
  render() {
    return (
      
      <div>
      <Router>
        <Newsnav/>
        <Switch>
          <Route exact key="general"  path="/general"> <NewsCompoent pageSize={5} country='in' category='general'/></Route>
          <Route exact key="business" path="/business"> <NewsCompoent pageSize={5} country='in' category='business'/></Route>
          <Route exact key="entertainment" path="/entertainment"> <NewsCompoent pageSize={5} country='in' category='entertainment'/></Route>
          <Route exact key="health"  path="/health"> <NewsCompoent pageSize={5} country='in' category='health'/></Route>
          <Route exact key="science"  path="/science"> <NewsCompoent pageSize={5} country='in' category='science'/></Route>
          <Route exact key="sports"  path="/sports"> <NewsCompoent pageSize={5} country='in' category='sports'/></Route>
          <Route exact key="technology"  path="/technology"> <NewsCompoent pageSize={5} country='in' category='technology'/></Route>
          <Route exact key="Home"  path="/home"> <NewsCompoent pageSize={5} country='in' category='general'/></Route>
          <Route exact key="News-monkey"  path="/"> <NewsCompoent pageSize={5} country='in' category='general'/></Route>

         
          </Switch> 
           </Router>
      </div>
      
    )
  }
}

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Clients from './components/Clients';
import Workers from './components/Workers';
import Services from './components/Services';
import Settings from './components/Settings';
import SingleWorker from './components/SingleWorker';
import Home from './components/Home';

class App extends React.Component{
    render(){
        return (
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/clients" component={Clients}/>
              <Route exact path="/workers" component={Workers}/>
              <Route exact path="/workers/:worker" component={SingleWorker}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/settings" component={Settings}/>
            </Switch>
          </div>
        </BrowserRouter>
        );
    }
}
export default App
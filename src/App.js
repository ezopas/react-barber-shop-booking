import React, { Component } from 'react';
import Header from './components/Header';
import Index from  './container/Index';
import './App.css';
import './data/styles/style.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Barber from './container/Barber';
import $ from 'jquery';
import 'jquery.nicescroll';

class App extends Component {

    componentWillMount() {
        $('body').scrollspy({ target: '.navbar' });

        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 55
            }, 500);
        })
    }

    NoMatch = ({ location }) => (
        <div className='p404'>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    );

    render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Index}/>
                <Route exact path='/barber' component={Barber}/>
                <Route component={this.NoMatch} />
            </div>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;

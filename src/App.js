import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.scss';
import './bs.css';
//import FormContainer from './containers/FormContainer';
//import Form from './component/Form';
import OfferSelection from './component/OfferSelection';
//import BasicServices from './component/BasicServices';
import  Nav from "./component/Nav";
//import BasicServicesDemo from './component/BasicServicesDemo';

class App extends Component{
  render(){
    return (
      <div>
        <Nav />
        
        <OfferSelection />

             
      </div>
    );
  }
}


export default App;

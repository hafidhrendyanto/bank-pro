import React from 'react';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Transfer from './components/pages/Transfer';
import Header from './components/Header';
import axios from 'axios';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state = {
    listOfUser: [
      {
        accountNumber: '5555',
        name: 'Hafidh Rendyanto',
        balance: 8888888888888,
        history: [
          {
            type: 'kredit',
            amount: 450000,
            related_number: null
          }, {
            type: 'debit',
            amount: 50000,
            related_number: null
          }
        ]
      },
      {
        accountNumber: '1111',
        name: 'Kikoy',
        balance: 8888888888888,
        history: [
          {
            type: 'kredit',
            amount: 450000,
            related_number: null
          }, {
            type: 'debit',
            amount: 50000,
            related_number: null
          }
        ]

      },
      {
        accountNumber: '2222',
        name: 'Jebron',
        balance: 8888888888888,
        history: []
      }
    ],
    currentUser: null
  }

  sendSoap = (xml) => {
  //   let xmlhttp = new XMLHttpRequest();
  //   xmlhttp.open('POST', 'http://localhost:8080/BankWS/BankWS', true);

  //   xmlhttp.onreadystatechange = function () {
  //     if (xmlhttp.readyState == 4) {
  //         if (xmlhttp.status == 200) {
  //             console.log(xmlhttp.responseText);
  //             // alert('done. use firebug/console to see network response');
  //         }
  //     }
  // }
  // // Send the POST request
  // xmlhttp.setRequestHeader('Content-Type', 'text/xml');
  // xmlhttp.send(xml);

    console.log(xml);
    axios.post('http://localhost:8080/BankWS/BankWS', xml, {headers:
      {'Content-Type': 'text/xml'}
    }).then(res=>{
      console.log(res);
    }).catch(err=>{console.warn(err)});
  }

  transfer = (accountNumber, amount) => {
    console.log(amount);
    this.setState({listOfUser: this.state.listOfUser.map(user => {
      if (user.accountNumber === this.state.currentUser.accountNumber) {
        user.balance -= amount;
      }
      if (user.accountNumber === accountNumber) {
        user.balance += Number(amount);
      }
    })});

    this.login(this.state.currentUser.accountNumber);
    console.log(this.state);
  }

  login = (accountNumber) => {
    // this.sendSoap(`<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Header/><S:Body><ns2:validateRekening xmlns:ns2="http://engima.me.org/"><rekening>${accountNumber}</rekening></ns2:validateRekening></S:Body></S:Envelope>`);
    for(let user of this.state.listOfUser) {
      if (user.accountNumber === accountNumber) {
        this.setState({currentUser: user});
        break;
      }
    }
  }

  logout = () => {
    this.setState({currentUser: null})
  }
  
  render() {
    return (
      <Router>
        <Route exact path="/" render={props => (
          <div className="App">
            <Header logout={this.logout}/>
            <Home currentUser={this.state.currentUser}/>
          </div>
        )} />
        <Route exact path="/login" render={props => (
          <div className="App">
            <Header logout={this.logout}/>
            <Login login={this.login}/>
          </div>
        )} />
        <Route exact path="/transfer" render={props => (
          <div className="App">
            <Header logout={this.logout}/>
            <Transfer transfer={this.transfer} />
          </div>
        )} />             
      </Router>
    );
  }
}

export default App;

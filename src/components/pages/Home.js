import React from 'react';
import {Redirect} from 'react-router-dom';

import potrait from '../../images/potrait.png'
import '../../App.css';

class Home extends React.Component {
  render() {
    if (this.props.currentUser === null) {
        return (
            <React.Fragment>
                <Redirect to='/login' />
            </React.Fragment>
        );
    }

    return (
        <div className="Container">
            <div className="content">
                <img src={potrait} style={potraitStyle} />
                <div className="Profile">
                    <h1>{this.props.currentUser.name}</h1>
                    <h4>Account Number : {this.props.currentUser.accountNumber}</h4>
                    <h4>Balance : {this.props.currentUser.balance}</h4>
                </div>
            </div>
            
        </div>
    );
  }
}

const potraitStyle = {
    width: 'auto',
    display: 'inline',
    height: '40vh' 
}

export default Home;
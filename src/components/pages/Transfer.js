import React from 'react';
import {Redirect} from 'react-router-dom';

import potrait from '../../images/potrait.png'
import '../../App.css';

class Transfer extends React.Component {
    state = {
        destAccNumber: '',
        amount: 0
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.transfer(this.state.destAccNumber, this.state.amount);
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
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
                <h1>Transfer Cuan</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="Input-form">
                        <p>Nomor Rekening Tujuan: </p>
                        <input 
                            type="text" 
                            name="destAccNumber"
                            value={this.state.destAccNumber}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="Input-form">
                        <p>Amount: </p> 
                        <input 
                            type="number" 
                            name="amount"
                            value={this.state.amount}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="Input-form">
                        <input type="submit" name="submit" value="Transfer" style={buttonStyle}></input>
                    </div>
                </form>
            </div>
        );
    }
}

const buttonStyle = {
    border: 'none',
    background: '#282c34',
    color: '#fff',
    padding: '7px 20px'
}

export default Transfer;
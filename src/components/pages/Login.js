import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Login extends React.Component {
    state = {
        accountNumber: '',
        // pin: ''

        // redirect: false,
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.accountNumber);
        this.props.login(this.state.accountNumber);
        this.setState({accountNumber: ''});
        this.props.history.push('/');
        // return (<Redirect to='/' />);
        // this.setState({redirect: true});
    }

    onChange = (e) => {
        this.setState({accountNumber: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="Login-form">
                    <div className="Input-form">
                        <p>Nomor Rekening: </p>
                        <input 
                            type="text" 
                            name="nomor-rekening"
                            value={this.state.accountNumber}
                            onChange={this.onChange}
                        />
                    </div>
                    {/* <div className="Input-form">
                        <p>Pin: </p> 
                        <input 
                            type="text" 
                            name="pin"
                            value={this.state.pin}
                        />
                    </div> */}
                    <div className="Input-form">
                        <input type="submit" name="submit" value="Log In" style={buttonStyle}></input>
                    </div>
                </form>
                {/* {this.state.redirect ? <Redirect to='/' /> : null} */}
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

export default withRouter(Login);
// export default Login;
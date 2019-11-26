import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import '../App.css';

class Header extends React.Component {
    gotoHome = (e) => {
        this.props.history.push('/'); 
    }

    gotoTransfer = (e) => {
        this.props.history.push('/transfer'); 
    }
    
    logout = (e) => {
        this.props.logout();
        this.props.history.push('/login'); 
    }
    
    render() {
        return (
            <Router>
                <header className="App-header">
                    <Route exact path="/login" render={props => ( 
                        <h2>
                            Bank Pro
                        </h2>
                    )} />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <h2 style={{marginBlockEnd: '0.23em'}}>
                                Bank Pro
                            </h2>
                            <nav style= {navStyle} >
                                <Link to='#' className='Link' onClick={this.gotoHome}> Home </Link> | 
                                <Link to='#' className='Link' onClick={this.gotoTransfer}> Transfer </Link> | 
                                <Link to='#' className='Link' onClick={this.logout}> Logout </Link> 
                            </nav>      
                        </React.Fragment>
                    )} />

                    <Route exact path="/transfer" render={props => (
                        <React.Fragment>
                            <h2 style={{marginBlockEnd: '0.23em'}}>
                                Bank Pro
                            </h2>
                            <nav style= {navStyle} >
                                <Link to='#' className='Link' onClick={this.gotoHome}> Home </Link> | 
                                <Link to='#' className='Link' onClick={this.gotoTransfer}> Transfer </Link> | 
                                <Link to='#' className='Link' onClick={this.logout}> Logout </Link> 
                            </nav>      
                        </React.Fragment>
                    )} />
                </header>
            </Router>
        );
    }
}

const navStyle = {
    fontSize: '0.8em',
    marginBlockEnd: '0.83em'
}

export default withRouter(Header);
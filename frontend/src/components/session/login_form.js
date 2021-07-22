import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        

        this.setState({errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
        email: this.state.email,
        password: this.state.password
        };

        this.props.login(user)
    }

    renderErrors() {
        return(
        <ul className='errors'>
            {Object.keys(this.state.errors).map((error, i) => (
            <li key={`error-${i}`}>
                {this.state.errors[error]}
            </li>
            ))}
        </ul>
        );
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-header">
                <Link to='/'><h1>Project Hawkeye</h1></Link>
                </div>
                <div className='login-form-container auth-form'>
                
                <div className='login-form outer-div'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-div'>

                    
                    <h1>Log in to your account</h1>
                    
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        placeholder="Email"
                    />
                    
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                    />
                    
                    <input className='submit-btn' type="submit" value="Log in" />
                </div>
                </form>
                <div className='bottom-auth-container'>
                    <button className='demo-btn'onClick={() => this.props.login({email: 'demo@demo.com', password:'test123'})}>Demo Login</button>
                    {this.renderErrors()}
                    <span className='auth-span'>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
                </div>

                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(LoginForm);
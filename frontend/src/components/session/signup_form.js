import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        password2: '',
        errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
        this.props.history.push('/login');
        }

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
        password: this.state.password,
        password2: this.state.password2
        };

        this.props.signup(user, this.props.history); 
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
            
            <div>
                <div className="auth-header">
                <Link to='/'><h1>Project Hawkeye</h1></Link>
                </div>
            
                <div className="signup-form-container auth-form">
                    <div className="signup-form outer-div">
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-div'>
                        <h1>Sign up for an account</h1>
                        
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
                        
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        
                        <input className='submit-btn' type="submit" value="Sign Up" />
                        {this.renderErrors()}
                    <span className='auth-span'>Already have an account? <Link to='/login'>Log in</Link></span>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);
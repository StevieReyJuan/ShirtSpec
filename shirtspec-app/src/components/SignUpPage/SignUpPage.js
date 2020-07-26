import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './SignUpPage.css';
import Content from '../Content';

class SignUpPage extends Component {

    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
    
    state = { error: null }
    
    handleSubmit = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target
    
        this.setState({ error: null })
        
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
        })
          .then(user => {
                user_name.value = ''
                password.value = ''
                this.props.history.push('/') // TODO: make function to handle login success
          })
          .catch(res => {
                this.setState({ error: res.error })
          })
    }

    render() {
        const { error } = this.state

        return(
            <>
                <Content className='sign-up'>
                    <header>
                        <img className='logo' src='/pics/logo.png' alt='Individualized Shirts Logo' />
                    </header>
                    {error && <p className='error-message'>{error}</p>}
                    <main>
                        <form className='sign-up-form' onSubmit={this.handleSubmit}>
                            <fieldset name='sign-up-details'>
                            <legend>ShirtSpec</legend>
                            <label htmlFor='user_name' required>Username</label>
                            <input placeholder='My Store Name' type='text' name='user_name' id='user_name' />

                            <label htmlFor='password' required>Password</label>
                            <input placeholder='1234passw0rd' type='password' id='password'/>

                            <button type='submit'>Register</button> 
                            <button onClick={() => this.props.history.push('/')}>Back</button>
                            </fieldset>
                        </form>
                    </main>
                    <footer className='footer'>
                        <p>Note: Passwords must be between 8 and 72 characters and not begin or end with a space.</p>
                    </footer>
                </Content>
            </>
        )
    }
}

export default SignUpPage;
import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service'
import { Link } from 'react-router-dom';
import './LandingPage.css'
import Content from '../Content'
// import Navbar from '../Nav/Navbar'

class LandingPage extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = {
        error: null
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                // this.props.onLoginSuccess()
                this.props.history.push('/customers')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    // handleLoginSuccess = () => {
    //     const { location, history } = this.props
    //     const destination = (location.state || {}).from || '/'
    //     history.push(destination)
    // }

    testModeCredentials = () => {
        document.getElementById('LoginForm_user_name').value = 'test'
        document.getElementById('LoginForm_password').value = 'test'
        //autosubmit?
    }

    render() {
        const { error } =this.state
        return(
            <>
                <Content className='LandingPage'>
                    <header>
                        <img className="logo" src="" alt="IS Logo" />
                    </header>
                    <main>
                        <form 
                            className="login-form"
                            id="login-form"
                            onSubmit={this.handleSubmitJwtAuth}
                            
                        >
                            <fieldset name="login-details">
                            <legend>ShirtSpec</legend>
                            <label htmlFor="user_name">Username</label>
                            <input placeholder="1234" type="text" name="user_name" id="LoginForm_user_name" required/>
    
                            <label htmlFor="password">Password</label>
                            <input placeholder="1234passw0rd" type="password" name="password" id="LoginForm_password" required/>
                            <button type="submit">Log in</button>
                            </fieldset>
                        </form>
                        <section className="mission">
                            <p>ShirtSpec is a measurement companion app for Individualized Shirts retail partners. Follow step-by-step instructions to measure a client and keep existing customers for future opportunities.</p>
                        </section>
                    </main>
                    <footer className="footer">
                        {error && <p>{error}</p>}
                        <p>New user? <Link to='/register'>SIGN UP</Link></p>
                        <p>To continue in test mode, <button onClick={() => this.testModeCredentials()}>FILL</button> test credentials</p>
                    </footer>
                </Content>
            </>
        )
    }
}

export default LandingPage;
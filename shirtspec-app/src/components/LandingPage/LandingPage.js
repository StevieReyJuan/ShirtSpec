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

    // const links = [
    //     {
    //         'title': 'test1',
    //         'link': '/test1'
    //     },
    //     {
    //         'title': 'test2',
    //         'link': '/test2' 
    //     }
    // ]
    render() {
        const { error } =this.state
        //prep form inputs for user_name, password vals and submits
        return(
            <>
                {/* <Navbar links={links}></Navbar> */}
                <Content className='LandingPage'>
                    <header>
                        <img className="logo" src="" alt="IS Logo" />
                    </header>
                    <main>
                        <form 
                            className="login-form"
                            onSubmit={this.handleSubmitJwtAuth}
                        >
                            <fieldset name="login-details">
                            <legend>ShirtSpec</legend>
                            <label htmlFor="user_name">Username</label>
                            <input placeholder="1234" type="text" name="user_name" id="LoginForm_user_name" required/>
    
                            <label htmlFor="password">Password</label>
                            <input placeholder="1234passw0rd" type="password" name="password" id="LoginForm_password" required/>
                            <button type="submit">Log in</button>
                            {/* <Link to='/customers'><button type="button">Log in</button></Link> */}
                            </fieldset>
                        </form>
                        <section className="mission">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque perferendis expedita illo earum minus inventore vitae, eveniet magni doloribus veniam repellat dicta tempora tenetur quo deleniti repudiandae sunt perspiciatis.</p>
                        </section>
                    </main>
                    <footer className="footer">
                        <p>New user? <Link to='/register'>SIGN UP</Link></p>
                        <p>To continue in test mode, start <Link to='/customers'>DEMO</Link></p>
                    </footer>
                </Content>
            </>
        )
    }
}

export default LandingPage;
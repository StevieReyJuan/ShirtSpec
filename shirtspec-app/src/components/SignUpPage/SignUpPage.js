import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service'
import './SignUpPage.css'
import Content from '../Content'
import Navbar from '../Nav/Navbar'

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
                this.props.history.push('/') //make function to handle login success
          })
          .catch(res => {
                this.setState({ error: res.error })
          })
    }

    render() {
        const { error } = this.state

        const links = [
            {
                'title': 'Home',
                'link': '/'
            }
        ]
        return(
            <>
                <Navbar links={links}></Navbar>
                <Content className='SignUpPage'>
                    <header>
                        <img className="logo" src="" alt="IS Logo" />
                    </header>
                    {error && <p>{error}</p>}
                    <main>
                        <form className="signup-form" onSubmit={this.handleSubmit}>
                            <fieldset name="signup-details">
                            <legend>ShirtSpec</legend>
                            <label htmlFor="user_name" required>Username</label>
                            <input placeholder="My Store Name" type="text" name="user_name" id="user_name" />

                            <label htmlFor="password" required>Password</label>
                            <input placeholder="1234passw0rd" type="password" id="password"/>
{/* 
                            <label htmlFor="repeatPassword" required>Re-Enter Password</label>
                            <input placeholder="1234passw0rd" type="password" id="repeatPassword"/> */}
                            <button type="submit">Register</button> 
                            {/* <Link to='/'><button type="button">Register</button> </Link> */}
                            </fieldset>
                        </form>
                    </main>
                    <footer className="footer">
                        <p>Don't have a store ID? E-mail <a href='mailto:fakeemail@notindividualizedshirts.com'>your rep</a></p>
                    </footer>
                </Content>
            </>
        )
    }
}

export default SignUpPage;
import React from 'react'
import { Link } from 'react-router-dom';
import './SignUpPage.css'
import Content from '../Content'
import Navbar from '../Nav/Navbar'

function SignUpPage() {
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
                <main>
                    <form className="signup-form">
                        <fieldset name="signup-details">
                        <legend>ShirtSpec</legend>
                        <label htmlFor="storeNum" required>Store ID</label>
                        <input placeholder="1234" type="number" name="storeNum" id="storeNum" />

                        <label htmlFor="password" required>Password</label>
                        <input placeholder="1234passw0rd" type="password" id="password"/>

                        <label htmlFor="repeatPassword" required>Re-Enter Password</label>
                        <input placeholder="1234passw0rd" type="password" id="repeatPassword"/>

                        <button type="submit">Register</button>
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

export default SignUpPage;
import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css'
import Content from '../Content'
// import Navbar from '../Nav/Navbar'

function LandingPage() {
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
    return(
        <>
            {/* <Navbar links={links}></Navbar> */}
            <Content className='LandingPage'>
                <header>
                    <img className="logo" src="" alt="IS Logo" />
                </header>
                <main>
                    <form className="login-form">
                        <fieldset name="login-details">
                        <legend>ShirtSpec</legend>
                        <label htmlFor="storeNum" required>Store ID</label>
                        <input placeholder="1234" type="number" name="storeNum" id="storeNum" />

                        <label htmlFor="password" required>Password</label>
                        <input placeholder="1234passw0rd" type="password" id="password" />
                        {/* <button type="submit">Log in</button> */}
                        <Link to='measurement-page/chest'><button type="button">Log in</button></Link>
                        </fieldset>
                    </form>
                    <section className="mission">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque perferendis expedita illo earum minus inventore vitae, eveniet magni doloribus veniam repellat dicta tempora tenetur quo deleniti repudiandae sunt perspiciatis.</p>
                    </section>
                </main>
                <footer className="footer">
                    <p>New user? <Link to='/register'>SIGN UP</Link></p>
                    <p>To continue in test mode, start <Link to='measurement-page/chest'>DEMO</Link></p>
                </footer>
            </Content>
        </>
    )
}

export default LandingPage;
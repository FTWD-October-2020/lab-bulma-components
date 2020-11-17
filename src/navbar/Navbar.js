import React from 'react';
import CoolButton from '../coolbutton/CoolButton.js'

const NavBar = () => {
    return (
        <>
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                            Home
      </a>
                    
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <span>
                                    <CoolButton name="Login" classes="is-link"/>
                                </span>
                                <span>
                                    <CoolButton name="Sign Up" classes="is-success" />
                                </span>    
                                
                            </div>
                        </div>
                    </div>
            </nav>
        </>
    );
};

export default NavBar;
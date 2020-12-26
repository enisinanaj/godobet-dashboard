import React, { Component } from 'react';

class Footer extends Component {

    render() {
        const year = new Date().getFullYear()
        return (
            <footer className="footer-container">
                <div className="text-center">
                    <span className="ml-2">&copy; {year} Godobet - Powered by NewLine Code</span>
                </div>
            </footer> 
        );
    }

}

export default Footer;

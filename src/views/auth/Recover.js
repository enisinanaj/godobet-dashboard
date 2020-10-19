import React, { Component } from 'react';
import Footer from '../../components/footer';

class Recover extends Component {

    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                {/* START card */}
                <div className="card card-flat">
                    <div className="card-header text-center bg-accent" style={{borderRadius: 0, backgroundImage: "linear-gradient(-45deg, rgb(233, 233, 233), rgb(242, 242, 242))"}}>
                        <a href="">
                            <img className="block-center" src="img/godobet_logo.png" alt="Logo" width={100}/>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">RESET PASSWORD</p>
                        <form>
                            <p className="text-center">Inserisci il tuo indirizzo email per ricevere le istruzioni su come resettare il tuo account.</p>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="resetInputEmail1">Indirizzo email</label>
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="resetInputEmail1" type="email" placeholder="Email" autoComplete="off"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-envelope"></em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-danger btn-block" type="button">Invia</button>
                        </form>
                    </div>
                </div>
                {/* END card */}
                <Footer />
            </div>
        );
    }
}

export default Recover;

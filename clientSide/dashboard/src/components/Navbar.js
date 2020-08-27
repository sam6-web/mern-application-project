import React, { Component } from 'react'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">                                            
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>                                                       
                        </ul>
                    </div>
                </nav>                
            </div>
        )
    }
}

export default Navbar

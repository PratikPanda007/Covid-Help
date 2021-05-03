import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Card from './Cards';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';
// import Layout from './Layout'


const Navbar = () => {
    return (
        <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand" href="#">Indian Tourism</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <Switch> */}
                            <Link className="nav-link" exact to="/" activeClassName="active">Home</Link>
                        {/* </Switch> */}
                    </li>
                    <li className="nav-item">   
                            <Link className="nav-link" to="/about" activeClassName="active">About Us</Link>
                    </li>
                    <li className="nav-item">                      
                            <Link className="nav-link" to="/contact" activeClassName="active">Contact Us</Link>
                    </li>

                    {/* <Route path="/" exact component={Card} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} /> */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                </ul>
            </div>
        </nav>
        </Router>
    )
}

export default Navbar

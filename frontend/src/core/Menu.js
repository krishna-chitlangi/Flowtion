import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import classes from './Menu.module.css'
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { backgroundColor: '#131D5A', borderRadius: '30px', color: 'white' }
    }
    else {
        return { color: 'black', fontWeight: 'bolder' }
    }
}

const Menu = (props) => {
    return (<div>
        <ul className={`nav nav-tabs justify-content-start ${classes.nav}`} style={{ float: 'left', width: '50%', margin: 0, padding: 0 }}>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(props.history, '/')} to="/"><img height="80px" src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvGCpB5Lmh3NwXs1M3EMoAJtliQpgfRu9...8y"></img></Link>
            </li>
            {isAuthenticated() &&
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(props.history, '/dashboard')} to="/dashboard">Dashboard</Link>
                </li>
            }


            {/* {isAuthenticated() && isAuthenticated().user.role === 0 &&
                (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(props.history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
                    </li>
                )
            }
            {isAuthenticated() && isAuthenticated().user.role === 1 &&
                (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(props.history, "/admin/dashboard")} to="/admin/dashboard">Dashboard</Link>
                    </li>
                )
            } */}


        </ul>
        <ul className={`nav nav-tabs justify-content-end ${classes.nav}`} style={{ float: 'right', width: '50%', margin: '0', padding: '25px', paddingRight: '50px' }}>
            {!isAuthenticated() &&
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(props.history, '/signin')} to="/signin">Signin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(props.history, '/signup')} to="/signup">Signup</Link>
                    </li>
                </React.Fragment>
            }
            {isAuthenticated() &&
                <li className="nav-item" >
                    <span className="nav-link" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={
                        () =>
                            signout(() => {
                                props.history.push("/")
                            })
                    }>Signout</span>
                </li>
            }



        </ul>
    </div>
    )
}

export default withRouter(Menu);

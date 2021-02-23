import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from "../actions/Auth";
import { clearMessage, clearSucessMessage } from "../actions/Message";

function HeaderComponent({ logout, isLoggedIn, clearMessage, clearSucessMessage  }) {
    const history = useHistory()
    function handleLogout() {
        logout();
        history.push("/");
    }
    function handleRedirectNav(url) {
        clearSucessMessage();
        clearMessage();
        history.push(url);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    Magic URL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link target={"_blank"} href="https://short-magic-url.herokuapp.com/swagger-ui.html">API Reference</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link onClick={() => history.push("/") }>Home</Nav.Link>
                        {!isLoggedIn &&
                        <>
                             <Nav.Link onClick={() => handleRedirectNav("/login") }>Login</Nav.Link>
                             <Nav.Link onClick={() => handleRedirectNav("/signup") }>SignUp</Nav.Link>
                        </>
                        }
                        {isLoggedIn &&
                        <>
                        <Nav.Link onClick={() => history.push("/dashboard") }>DashBoard</Nav.Link>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

const mapStateToProps = state => {
    const { isLoggedIn } = state.auth;
    return {
        isLoggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        clearSucessMessage: () => dispatch(clearSucessMessage()),
        clearMessage: () => dispatch(clearMessage())

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (HeaderComponent)

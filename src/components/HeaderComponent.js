import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from "../actions/Auth";

function HeaderComponent({ logout, isLoggedIn }) {
    function handleLogout() {
        logout()
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    Magic URL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">API Reference</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        {!isLoggedIn &&
                        <>
                             <Nav.Link href="/login">Login</Nav.Link>
                             <Nav.Link href="/signup">SignUp</Nav.Link>
                        </>
                        }
                        {isLoggedIn &&
                        <>
                        <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link>
                        <Nav.Link href="/dashboard">DashBoard</Nav.Link>
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
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (HeaderComponent)

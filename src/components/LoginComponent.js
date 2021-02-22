import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from "../actions/Auth";
import { Redirect } from 'react-router-dom';

function LoginComponent({ isLoggedIn, message, sucess_message, login }) {
  const nameRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    login(nameRef.current.value, passwordRef.current.value)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setLoading(false)
        console.log(isLoggedIn)
      })
    setLoading(false)
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;

  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {sucess_message && <Alert variant="success">{sucess_message}</Alert>}
          {message && <Alert variant="danger">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>

        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  const { sucess_message } = state.sucessMessage;
  return {
    isLoggedIn,
    message,
    sucess_message,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) => dispatch(login(userName, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
  (LoginComponent)
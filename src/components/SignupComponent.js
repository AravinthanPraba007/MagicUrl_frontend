import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import UserDataService from '../services/UserDataService'
import { connect } from 'react-redux'
import { register } from "../actions/Auth";
import { setMessage } from '../actions/Message';

function SignupComponent({ register, setMessage, message, sucess_message}) {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    function handleRegister(e) {
        e.preventDefault()
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setMessage('Passwords do not match')
        }

        setLoading(true)
        register(userNameRef.current.value, passwordRef.current.value)
            .then(() => {
                // history.push("/");
            })
            .catch(() => {
                setLoading(false)
            })
        setLoading(false)
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {message && <Alert variant="danger">{message}</Alert>}
                    {sucess_message && <Alert variant="sucess">{sucess_message}</Alert>}
                    <Form onSubmit={handleRegister}>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control ref={userNameRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    const { message } = state.message;
    const { sucess_message } = state.sucessMessage;
    return {
        message,
        sucess_message
    };
}

const mapDispatchToProps = dispatch => {
    return {
        register: (userName, password) => dispatch(register(userName, password)),
        setMessage: (message) => dispatch(setMessage(message))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (SignupComponent)

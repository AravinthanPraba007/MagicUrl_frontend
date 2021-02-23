import React from 'react'
import { Form, Button, Col, Alert } from "react-bootstrap"
import { useRef, useState } from "react"
import { setMessage } from '../actions/Message'
import { connect } from 'react-redux'
import { generateUrl } from "../actions/MagicUrl"
import {CopyToClipboard} from 'react-copy-to-clipboard';

function HomeComponent({  generateUrl, isLoggedIn, setMessage, message, sucess_message, userName, shortUrl}) {
    const [showPopUp, setShowPopUp] = useState(false);
    const [loading, setLoading] = useState(false)
    const [copied, setCopied] = useState(false)
    const contentTypeRef = useRef()
    const contentRef = useRef()
    const expiryTimeRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        if (contentRef.current.value == "") {
            return setMessage('Content cannot be empty')
        }
        setLoading(true)
        var user_name=""
        if(isLoggedIn) 
            user_name=userName 
        else
            user_name=""
        generateUrl(contentRef.current.value, contentTypeRef.current.value, expiryTimeRef.current.value,user_name)
          .then(() => {
              setShowPopUp(true)
              contentRef.current.value=""
          })
          .catch(() => {
            setLoading(false)
          })
        setLoading(false)
      }

      function handleGenerateNewUrl() {
        setShowPopUp(false)
        contentRef.value=""
      }

    return (
        <div className="mp-5px">
            <Alert show={showPopUp} variant="success">
        <Alert.Heading>Your Short URL has been created!</Alert.Heading>
        <p>
        <a target={"_blank"} href={shortUrl}> {shortUrl} </a>
        </p>
        
        <CopyToClipboard text={shortUrl}
          onCopy={() => setCopied(true)}>
          <Button>
            Copy to clip board
        </Button>
        </CopyToClipboard>

       
        <div>
        {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowPopUp(false) } variant="outline-success">
            Generate a new magic Url 
          </Button>
        </div>
      </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="contentTypeGrid">
                        <Form.Label><h3>Create a disappearing</h3></Form.Label>
                        <Form.Control as="select" defaultValue="message" ref={contentTypeRef}>
                            <option value="message">Message</option>
                            <option value="link">Link</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="contentTypeGrid">
                        <Form.Label><h4>Self-destruct Timer</h4></Form.Label>
                        <Form.Control as="select" defaultValue="600000" ref={expiryTimeRef}>
                            <option value="60000">1 minute</option>
                            <option value="600000">10 minutes</option>
                            <option value="3600000">1 hour</option>
                            <option value="86400000">1 day</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="contentGrid">
                    <Form.Label>Enter the Your content</Form.Label>
                    <Form.Control placeholder="What do you want to say?"  as="textarea" rows={3} ref={contentRef} required/>
                </Form.Group>
                <Button variant="primary" disabled={loading} className="w-100" type="submit">
                    Generate
                </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    const { isLoggedIn } = state.auth;
    const { userName } = state.auth;
    const { message } = state.message;
    const { sucess_message } = state.sucessMessage;
    const { shortUrl } = state.magicurl;
    return {
      isLoggedIn,
      userName,
      message,
      sucess_message,
      shortUrl,
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        generateUrl: (content, contentType, expiryTime, user_name) => dispatch(generateUrl(content, contentType, expiryTime, user_name)),
        setMessage: (message) => dispatch(setMessage(message))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )
    (HomeComponent)

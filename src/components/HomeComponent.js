import React from 'react'
import { Form, Button, Col } from "react-bootstrap"

export default function HomeComponent() {
    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="contentTypeGrid">
                        <Form.Label><h3>Create a disappearing</h3></Form.Label>
                        <Form.Control as="select" defaultValue="message">
                            <option value="message">Message</option>
                            <option value="link">Link</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="contentTypeGrid">
                        <Form.Label><h4>Self-destruct Timer</h4></Form.Label>
                        <Form.Control as="select" defaultValue="600000">
                            <option value="60000">1 minute</option>
                            <option value="600000">10 minutes</option>
                            <option value="3600000">1 hour</option>
                            <option value="86400000">1 day</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="contentGrid">
                    <Form.Label>Enter the Your content</Form.Label>
                    <Form.Control placeholder="What do you want to say?"  as="textarea" rows={3}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Generate
                </Button>
            </Form>
        </div>
    )
}

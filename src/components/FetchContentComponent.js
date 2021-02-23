import React from 'react'
import MagicUrlService from "../services/MagicUrlService"
import { Alert, Badge } from "react-bootstrap"
import { useState } from "react"

export default function FetchContentComponent() {
    const [showSucessAlert, setSucessAlert] = useState(false);
    const [showErrorAlert, setErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [content, setContent] = useState("");
    const [contentType, setContentType] = useState("");
    var path = window.location.pathname
    var split = path.split("/")
    var magicId = split.pop();


    console.log(magicId)

    MagicUrlService.fetchContent(magicId).then(
        (response) => {
            console.log(response)
            setMessage(response.response_message)
            setContent(response.content)
            setContentType(response.content_type.toUpperCase())
            setSucessAlert(true)
            setErrorAlert(false)
            console.log(contentType)
            console.log("sucess" + showSucessAlert)
            console.log("error" + showErrorAlert)
        },
        (error) => {
            console.log(error.response)
            setMessage(error.response.data.response_message)
            setErrorAlert(true)
            setSucessAlert(false)
            console.log("error" + showErrorAlert)
            console.log("sucess" + showSucessAlert)
        }
    );


    return (

        <div className="text-center">
            <Alert show={showSucessAlert} variant="success">
                <Alert.Heading className="text-center">{message}</Alert.Heading>
                <Badge pill variant="primary" className="mt-1 mb-1">
                    <h6>{contentType}   Shared</h6>
                </Badge>


                {contentType === "LINK" &&
                    <a target={"_blank"} href={content}><h6>{content}</h6></a>
                }
                {contentType === "MESSAGE" &&
                    <h6>{content}</h6>
                }





            </Alert>
            <Alert show={showErrorAlert} variant="dark">
                <Alert.Heading className="text-center">{message}</Alert.Heading>
                <p>

                </p>
            </Alert>
        </div>
    )
}

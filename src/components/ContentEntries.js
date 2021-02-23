import React from 'react'
import { Badge } from "react-bootstrap"

export default function ContentEntries({item}) {
    // console.log(item)
    return (
        <tr>
        <td>{item.contentType}</td>
        {item.expired ? <td><Badge variant="info">Inactive</Badge></td> : <td><Badge variant="success">Active</Badge></td>}
        <td>
            <a target={"_blank"} href={item.magicURL}>{item.magicURL}</a>
        </td>
        <td>{item.content}</td>
      </tr>
    )
}
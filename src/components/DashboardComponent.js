import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Table } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import MagicUrlService from "../services/MagicUrlService";
import { useState } from "react"
import ContentEntries  from './ContentEntries'

function DashboardComponent({isLoggedIn, userName}) {
    const history = useHistory()
    const [showTable, setTable] = useState(false);
    const [tableContent, setTableContent] = useState([]);
    const [loading, setLoading] = useState(false)
    
    function handlefetch(e) {
        setLoading(true)
        MagicUrlService.fetchUserMagicUrls(userName).then(
            (response) => {
                setTableContent(response.data)
                if(tableContent === null || tableContent.length == 0)
                setTable(false)
                else
                setTable(true)

                // console.log(showTable)
    
            },
            (error) => {
                // console.log(error.response)
            
            }
        );
        setLoading(false)
        // console.log(showTable)
        }
   

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }
    
    


    return (
        <div className="align-items-center justify-content-center">
            <h4 className="text-center mb-5">Welcome {userName} !!</h4>
            <Button className="w-100" onClick={() => history.push("/") }>
              Want to generate a new Magic URL
            </Button>

            <Button className="w-100 mt-5"  disabled={loading} onClick={() => handlefetch() }>
              Want to Fetch your Magic URL data
            </Button>

            
            {showTable &&
            <Table className="mt-2 text-center" striped bordered hover>
  <thead>
    <tr>
    <th>Content Type</th>
    <th>Status</th>
    <th>MagicUrl</th>
    <th>Content</th>
    </tr>
  </thead>
  <tbody>
  {tableContent.map(item => (
    <ContentEntries  item={item} />
    ))}
  </tbody>
</Table>
}
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    const { isLoggedIn } = state.auth;
    const { userName } = state.auth;
    return {
      isLoggedIn,
      userName,
    };
  }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//         generateUrl: (content, contentType, expiryTime, user_name) => dispatch(generateUrl(content, contentType, expiryTime, user_name)),
//         setMessage: (message) => dispatch(setMessage(message))
//     }
//   }
  
  export default connect(
    mapStateToProps
  )
    (DashboardComponent)

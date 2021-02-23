import SignupComponent from "./SignupComponent";
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import DashboardComponent from './DashboardComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
function App() {
  return (
    <>
     <Router>
    <HeaderComponent/>
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
       
          <Switch>
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/signup" exact component={SignupComponent} />
            <Route path="/dashboard" exact component={DashboardComponent} />
            <Route path="/" exact component={HomeComponent} />
          </Switch>
        
      </div>
    </Container>
    </Router>
    </>
  )
}

export default App;

import SignupComponent from "./SignupComponent";
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/signup" component={SignupComponent} />
            <Route path="/" exact component={HomeComponent} />
          </Switch>
        </Router>
      </div>
    </Container>
  )
}

export default App;

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Dashboard from './components/dashboard/dashboard'
import projectDetails from './components/projects/projectDetails'
import SignIn from './components/auth/signIn'
import Signup from './components/auth/signUp'
import createProject from './components/projects/createProject'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Navbar/>
     <Switch> 
       <Route exact path="/" component={Dashboard}></Route>
       <Route path="/project/:id" component={projectDetails}></Route>
       <Route path="/SignIn" component={SignIn}></Route>
       <Route path="/Signup" component={Signup}></Route>
       <Route path="/createProject" component={createProject}></Route>
     </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

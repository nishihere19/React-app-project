import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Dashboard from './components/dashboard/dashboard'
import projectDetails from './components/projects/projectDetails'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Navbar/>
     <Switch> 
       <Route exact path="/" component={Dashboard}></Route>
       <Route path="/project/:id" component={projectDetails}></Route>
     
     </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

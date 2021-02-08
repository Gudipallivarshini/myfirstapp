import logo from './logo.svg';
import './App.css';
import Demo from './components/demo'
import ClassBased from './components/classBased'
import Hooks from './components/hooksInc';
import Data from '../data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  var info=Data.profiles;
  return (
    <BrowserRouter>
    <Route exact path= "/myfirstapp" component={Home}/>
    <Route exact path= "/Profile" component={Profile}/>
    </BrowserRouter>
         
  );
}


let Home=()=>{
  var info=Data.profiles;
  return(
 
    <div className="App">
    
    {info.map((i,index)=>(
      <div key={index}>
        
        <h1>{i.name}</h1>
        <h1>{i.role}</h1>
        <Link to={{pathname:"/Profile",data:{id:index}}}>VIEW DETAILS</Link>
      </div>

    ))}
    </div>
    
  );
}

export default App;

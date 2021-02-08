import logo from './logo.svg';
import './App.css';
import Demo from './components/demo'
import ClassBased from './components/classBased'
import Hooks from './components/hooksInc';
function App() {
  return (
    
    <div className="App">
      <h1>HELLO NEC</h1>
     
      <ClassBased name="varshu">NEC</ClassBased>
      <h1>hooks</h1>
      <Hooks />
      <Home/>
      </div>
       
  );
}
let Home=()=>{
  return(
    <h1><b>This is my HOME component </b></h1>
    
  );
}

export default App;

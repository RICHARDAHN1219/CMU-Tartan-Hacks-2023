import './App.css';
import NavBar from './component/navbar/navbar.js';
import Home from './screens/Home'
import className from 'classnames';

function App() {
  return (
    <div className="App">
      <NavBar />
    <div className="content">
      <Home /> 
    </div>

  </div>
  
    );
}

export default App;

import './App.css';
import Header from './components/header';
import Home from './components/home';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

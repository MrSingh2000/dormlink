import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LoginForm from './components/login';
import SignupForm from './components/signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;

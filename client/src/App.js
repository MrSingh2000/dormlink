import './App.css';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/Login';
import SignupForm from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AdminDashboard/>
    </div>
  );
}

export default App;

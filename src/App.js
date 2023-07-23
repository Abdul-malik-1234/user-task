
import './App.css';
import  Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import UsersList from './Components/UsersList'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
      
        <div>
        <Routes>
        <Route path="/" element={<Login/>} > </Route>
        <Route path="/login" element={<Login/>} > </Route>
        <Route path="/signup" element={<Signup/>} > </Route>
        <Route path="/home" element={<Home/>} > </Route>
        <Route path="/getUsers" element={<UsersList/>} > </Route>
        </Routes>
        </div>
  );
}

export default App;

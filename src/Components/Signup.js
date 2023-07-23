import React from 'react';
import '../App.css';
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios"
function Signup(){
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")    
                }
                else if(res.data==="notexist"){
                    history("/Home",{state:{id:email}})
                }
            })
            .catch((e)=>{
                alert("wrong details")
                console.log(e)
            })  
        }
        catch{

        }
    }
    return(
        <div className="content">
             
        <div className="form">
            <header>
                <h1>Sign Up</h1>
            </header>
            <div className='io'>
            <form action="POST">
                <input type="email" className='ioinput' placeholder='Email' onChange={(e)=>{
                    setEmail(e.target.value)
                }
                }/>
                <input type="password" className='ioinput' placeholder='Password'
                onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                } id="myInput"/>
               
                 </form>
             
                <div class="sign-in">
                <button type="submit" onClick={submit}>SIGN IN</button>
                <div className="nouser">
                <p>If account exists login</p>
                <Link to="/login" > here</Link>
                </div>
                </div>
               
            </div>

        </div>
        <Link to="/getUsers" > Get all users</Link>

        </div>
        
    )
}
export default Signup;
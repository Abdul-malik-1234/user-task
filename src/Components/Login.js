import React from 'react';
import '../App.css';
import {Link,useNavigate} from "react-router-dom";
import {useState} from 'react';
import axios from "axios"
function Login(){
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                        history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch((e)=>{
                alert("wrong details")
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        
        <div className="content">
             
        <div className="form">
            <header>
                <h1>Login</h1>
            </header>
            <div className='io'>
            <form action="POST">
                <input type="emailt" className='ioinput' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}
                }/>
                <input type="password" className='ioinput' placeholder='Password'
                onChange={(e)=>{setPassword(e.target.value)}
                }/>
                </form>
                <div class="sign-in">
                <button type="submit" onClick={submit}>SIGN IN</button>
                <div className="nouser">
                <p>Don't have a account?</p>
                <Link to="/signup" > Sign Up</Link>
                </div>
                </div>
                
            </div>
        </div>
        <Link to="/getUsers" > Get all users</Link>
        </div>
        
    )
}
export default Login;
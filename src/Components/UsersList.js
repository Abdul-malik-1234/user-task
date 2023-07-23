import {useEffect,useState} from "react";
import '../App.css';
function UsersList(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/getallUsers",{
            method: "GET",
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"useData")
            setData(data.data)
        });
        
    },[])
    return(
        <div class="container">
            <h1>List of users</h1>
            <table >
                <thead>
                    <tr>
                        <th>
                            Email
                        </th>
                        <th>
                            Password
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d)=>{
                            return(
                            <tr>                                              <td>{d.email}</td>
                            <td>{d.password}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}
export default  UsersList;
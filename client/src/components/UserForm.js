import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import CrackleImage from '../images/scpgif.gif';

const UserForm = () => {
    const [userName, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            userName: userName,
            password: password,
            confirmPassword: confirmPassword,
        };
        try {
            await axios.post("http://localhost:8000/api/new", userData);
            navigate("/");
        } catch (err) {
            setErr(err.response.data.error);
        }
        // axios.post('http://localhost:8000/api/new', {
        //     userName,  
        //     password,
        //     confirmPassword,
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <body>
                <div>
                    <h4>Accept the challenge, and summon your Beast</h4>
                    <h6>Prepare your last will and testament first, of course.</h6>
                    {err && <h3 style={{ color: "red" }}>{err}</h3>}
                    <p>
                        <label>User Name:</label><br/>
                        <input type="text" onChange = {(e)=>setUserName(e.target.value)}/>
                    </p>
                    <p>
                        <label>Password:</label><br/>
                        <input type="text" onChange = {(e)=>setPassword(e.target.value)}/>
                    </p>
                    <p>
                        <label>Confirm Password:</label><br/>
                        <input type="text" onChange = {(e)=>setConfirmPassword(e.target.value)}/>
                    </p>
                    <div className="centerButtons">
                    <button type="submit">Commit your Soul</button>
                    </div>
                </div>
                <footer>
                    <Link to={"/"}>Home</Link>
                    <br />
                    <img className="crackleImage" src={CrackleImage} width="250px" height="125px" alt="" />
                </footer>
            </body>
        </form>
    )
}
export default UserForm;
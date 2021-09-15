import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Cardback from '../images/cardback.jpg';

const WelcomePage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr("");
        // setSuccessMessage("");
        const userData = { userName, password };
        // console.log(userData);
        axios.post("http://localhost:8000/api/login", userData)
            //is something missing here
            .then(
                (response) => {
                    // setSuccessMessage(response.data.message)
                console.log("here")
                navigate("/game")
                console.log("here");} 

            )
            .catch((err) => console.log(err.response.data.err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <body>
                <div className='bg'></div>
                <h1>Welcome, to the end of things...</h1>
                <h5>Match the SCP's, but beware not to summon them.</h5>
                <img className="homeSpinner" src={Cardback} alt="" />
                <h5>Log in here, if you so dare</h5>
                {err && <h3 style={{ color: "red" }}>{err}</h3>}
                {successMessage.length > 0 && (
                <h3 style={{ color: "green" }}>{successMessage}</h3>
                )}
                <div className="welcomeLabels">
                    <div>
                        <label htmlFor="">User Name:</label>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="centerButtons">
                    <button type="submit">Submit</button>
                </div>
                <div className="centerLinks">       
                <Link to={"/new"}> Register a New Sacrifice</Link>
                </div>
                </body>
            <footer>
            <Link to={"/high-scores"}>High Scores</Link>
            <br />
            <p style={{fontWeight:"bold", color:"white"}}>SCP was chosen as the theme by my son, this game was built for him!</p>
            <p style={{fontWeight:"bold", color:"white"}}>Most monsters are of SCP origin, with a couple of special guests...</p>
            <p style={{fontWeight:"bold", color:"white"}}>The customer is always right 😁</p>
            </footer>
        </form>
        
    )//end return    
}//end WelcomePage

export default WelcomePage;
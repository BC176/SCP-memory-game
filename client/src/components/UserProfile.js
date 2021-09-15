import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";
import Snuff from '../images/snuffed.gif';

const UserProfile = (props) => {
    const {userID} = props;
    const [userInfo, setUserInfo] = useState("");
    const {removeFromDom} = ""

    useEffect(() => {
        // console.log(userID);
        axios
            .get(`http://localhost:8000/api/user/${userID}`)
            .then((queriedUser) => {
                console.log(queriedUser.data.user);
                setUserInfo(queriedUser.data.user);
            })
            .catch((err) => console.log(err.response));
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8000/api/${id}`)
        .then(res => {
            removeFromDom(id);
        })
        .catch((err) => console.log(err));
    };

    return (
        <>
        <body>
        <div>
            <h1>{userInfo.userName} does not impress.</h1>
            <h5>You may snuff them out at will.</h5>
            <p>
                <table>
                <tr>
                    <th>User Name</th> 
                    <th>High Score</th>
                    <th>End this Player for Good</th>
                </tr>
                <tr>
                    <td>{userInfo.userName}</td>
                    <td>{userInfo.highScore}</td>
                    <td><Link to={'/high-scores'}><button onClick={() => deleteUser(userInfo._id)}>Delete User</button></Link></td>
                </tr>
                </table>
            </p>
        </div>
        <div className="centerLinks">
            <Link className="links" to={'/'}>Home</Link>
            
        </div>
        </body>
        <footer>
        <Link className="links" to={'/high-scores'}>High Scores</Link>
        <br />

        <img className="crackleImage" src={Snuff} width="250px" height="125px" alt="" />
        </footer>
        </>
    )//end return

}//end UserProfile

export default UserProfile;
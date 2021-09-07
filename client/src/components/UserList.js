import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Spider from '../images/spider.gif';

const UserList = (props) => {
    const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/high-scores")
            .then(
                (allUsers) => {
                    setUsers(allUsers.data.allUsers);
                }
            )
            .catch((err) => console.log(err));
    }, [setFormSubmittedBoolean]);

    // const deleteUser = (id) => {
    //     axios
    //         .delete(`http://localhost:8000/api/${id}`)
    //         .then((response) => {
    //             setFormSubmittedBoolean(!formSubmittedBoolean);
    //         })
    //         .catch((err) => console.log(err));
    // };

    const sortedUsers = users;
    // console.log(users);

    sortedUsers.sort((a, b) => (a.highScore < b.highScore) ? 1: -1);

    return (
        <>  
            <h2>Mediocre Accomplishments</h2>
            <div classname="sortedList">
                <body>
                <table className="tableDisplayAll">
                    <tbody>
                        <tr>
                            <th>User Name</th>
                            <th>Score</th>
                            <th>User Profile</th>
                        </tr>
                {sortedUsers.length > 0 &&
                    sortedUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{user.userName}</td>
                            <td>{user.highScore}</td>  
                            <td>      
                            <Link to={`/user/${user._id}`}>User Profile</Link>
                            </td>
                            <hr />
                        </tr>                    
                    ))}
                    </tbody>
                </table>
                <div className="centerLinks">
                    <Link to={"/"}>Home</Link>
                </div>
                <img src={Spider} width="350px" height="175px" alt="" />
                </body>
            </div>
            <footer></footer>
        </>
    );
};

export default UserList;
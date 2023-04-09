import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/users`);
        if(response.data){
            setUsers(response.data.data)
        }
    }

    return (
        <div>
            <h2>Users</h2>
            {users.length ? <div>
                {users.map((user, i) => 
                    <div key={i}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                        <h3>{user.address}</h3>
                    </div>
                    )}
            </div> : <div>
                No Users found
                </div>}
        </div>
    )
}

export default User;
import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();

    console.log(users);
    return (
        <div>
            <h2>Ours Users: {users.length}</h2>
            <p>Fantastic & vodro users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
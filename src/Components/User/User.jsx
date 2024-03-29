import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, phone, email} = user;
    const userStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px',
        margin: '5px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click me</button>
            </Link>
        </div>
    );
};

export default User;
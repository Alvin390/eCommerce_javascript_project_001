import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Registration  () {
    const navigate = useNavigate();
    const [username,setUsername]  = useState('');
    const [email,setEmail]  = useState('');
    const handleRegistration = (e) => {
        e.preventDefault();
        Registration (username, email);
        navigate("/");
    };
    return (
        <div className="registration-page">
            <h1>Registration</h1>
            <form className="registration-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required placeholder="Enter Password" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Registration;
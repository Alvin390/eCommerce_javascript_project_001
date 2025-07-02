import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login (){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handlelogin = (e) => {
        e.preventDefault();
        Login(email);
        navigate("/")
    }
    return(
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}
export default Login;
import { signInWithRedirect } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import signInWithGoogle from "../../auth";
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    signInWithGoogle()
      .then(() => {
        localStorage.setItem("isLogged", true);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };
  if (localStorage.getItem("isLogged") == "true")
    return <Navigate to="/dashboard" />;

  return (
    <div className="loginPage">
    <div className='LoginLogo'>
      <FontAwesomeIcon className='LoginlogoIcon' icon={faSlack} />
      <h4>AST</h4>
    </div>
      <div className="login-container">
        <h1>Welcome to Your App</h1>
        <p>Sign in to access your personalized dashboard and explore great features.</p>
        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          <i className="fab fa-google" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

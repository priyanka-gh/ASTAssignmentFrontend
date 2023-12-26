import { signInWithRedirect } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  googleProvider,
  onAuthStateChanged,
  getRedirectResult
} from '../../firebase';
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('User state changed:', user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const result = await getRedirectResult(auth);
      if (result.user) {
        console.log("Successfully signed in with Google", result.user);
        navigate("/dashboard");
      } else {
        console.error("User not signed in");
      }
      setLoading(false);
    };
    fetch();
  }, [navigate]);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await signInWithRedirect(auth, googleProvider);
    } catch (err) {
      console.error('Error during Google sign-in:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
    <div className='LoginLogo'>
      <FontAwesomeIcon className='LoginlogoIcon' icon={faSlack} />
      <h4>AST</h4>
    </div>
      <div className="login-container">
        <h1>Welcome to Your App</h1>
        <p>Sign in to access your personalized dashboard and explore great features.</p>
        <button className="login-btn" onClick={signInWithGoogle} disabled={loading}>
          <i className="fab fa-google" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google sign-in was successful
        resolve(result);
      })
      .catch((error) => {
        // Handle errors here
        reject(error);
      });
  });
};

export default signInWithGoogle;
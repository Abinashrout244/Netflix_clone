import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/Firebase.config";
import { AuthContext } from "./AuthContext";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //createuser

  const RegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //googlelogin

  const ReisterWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //logout

  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //getuser Data
  useEffect(() => {
    const getData = onAuthStateChanged(auth, (curruser) => {
      setUser(curruser);
      setLoading(false);
    });

    return () => getData();
  }, []);

  const values = {
    RegisterUser,
    Login,
    Logout,
    ReisterWithGoogle,
    loading,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

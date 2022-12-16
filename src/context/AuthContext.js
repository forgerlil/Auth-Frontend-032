import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const verifyToken = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:3100/user/auth',
        {},
        { headers: { Authorization: token } }
      );
      setIsAuthenticated(true);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    token && verifyToken();
  }, [token]);

  const value = {
    setToken,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// <MyComponent /> -> console.log(props) -> {}

// <MyComponent><App /></MyComponent> -> console.log(props) -> {children: ''}

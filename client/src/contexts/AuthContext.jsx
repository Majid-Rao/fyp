import React, { createContext,useContext, useEffect ,useState} from 'react'
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const AuthProvider = ({ children}) => {
 const [token, setToken] = useState(null);
 const [UserData, setUserData] = useState(null);
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const [isAuthenticatedT, setIsAuthenticatedT] = useState(false);
 const [isAuthenticatedS, setIsAuthenticatedS] = useState(false);
 const [isAuthenticatedE, setIsAuthenticatedE] = useState(false);

 const storedData = JSON.parse(localStorage.getItem('user_data'));
 let navigate = useNavigate();
 useEffect(()=>{
if(storedData){
    const {userToken, user} = storedData;
    setToken(userToken);
    setUserData(user);
    if(user.role == 'admin')
      {
        setIsAuthenticated(true);
      }
      else if(user.role == 'teacher'){
        setIsAuthenticatedT(true);
      }
      else if(user.role == 'student'){
        setIsAuthenticatedS(true);
      }
      else if(user.role == 'swaper'){
        setIsAuthenticatedE(true);
      }

}
 },[]);
 const login = (newToken, newData)=>{
    localStorage.setItem("user_data", JSON.stringify({userToken: newToken, user: newData, uid: newData._id}),
);
    setToken(newToken);
    setUserData(newData);
    
    if(newData.role == 'admin')
    {
      setIsAuthenticated(true);
      navigate("/admindashboard");
    }
    else if(newData.role == 'teacher'){
      setIsAuthenticatedT(true);
       navigate("/teacherdashboard");
    }
    else if(newData.role == 'student'){
      setIsAuthenticatedS(true);
       navigate("/studentdashboard");
    }
    else if(newData.role == 'swaper'){
      setIsAuthenticatedE(true);
       navigate("/swaperdashboard");
    }
    
 };



 const logout =()=>{
    localStorage.removeItem('user_data')
    setToken(null);
    setUserData(null);
    if(UserData.role == 'admin')
      {
        setIsAuthenticated(false);
  
      }
      else if(UserData.role == 'teacher'){
        setIsAuthenticatedT(false);
      }
      else if(UserData.role == 'student'){
        setIsAuthenticatedS(false);
      }
      else if(UserData.role == 'swaper'){
        setIsAuthenticatedE(false);
      }
 }
    return (
    <AuthContext.Provider  value={{
      token,
      isAuthenticated,
      isAuthenticatedT,
      isAuthenticatedS,
      isAuthenticatedE,
      login,
      logout,
      UserData,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth =()=> useContext(AuthContext);

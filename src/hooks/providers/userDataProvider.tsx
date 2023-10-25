import { useEffect, useState } from "react"
import UserDataContext from '../contexts/userDataContext.ts'
import { IAccountInfo } from "../../localstorage/interfaces/accountInfo.ts";

const UserDataProvider = (props : any) => {
  const [ userData, setUserData ] = useState<IAccountInfo | null>(null);
  
  function setUser(data : IAccountInfo) {
    setUserData(data)
  }

  useEffect(() => {
    console.log(userData);
  })

  const { children } = props; 

  const contextValue = {
    userData,
    setUser
  };
  return(
    <UserDataContext.Provider value={ contextValue }>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserDataProvider
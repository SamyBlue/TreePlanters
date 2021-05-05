import React, { useContext, useState } from 'react'

const UserDataContext = React.createContext()
const UserDataUpdateContext = React.createContext()

export function useUserData() {
	return [useContext(UserDataContext), useContext(UserDataUpdateContext)]
}

//Example usage: 

export function UserDataProvider({children}) {
    const [userData, setUserData] = useState({})
	
	return (
		<UserDataContext.Provider value={userData}>
			<UserDataUpdateContext.Provider value={setUserData}>
				{children}
			</UserDataUpdateContext.Provider>
		</UserDataContext.Provider>
)}

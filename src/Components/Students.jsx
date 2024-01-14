import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Students = () => {

    const { loginWithRedirect, user, loginWithPopup, isAuthenticated, logout } = useAuth0()

    console.log(user)
    return (
        <div className="flex justify-center items-center flex-col">
            <button className="border px-10 py-2 my-10 bg-[#121212] text-white" onClick={() => loginWithRedirect()}>Log In</button>

            {
                isAuthenticated && <div>
                    Name: {user?.name}
                    <img src={user.picture} alt="" />
                </div>
            }

            <button onClick={() => loginWithPopup()}>pop</button>



            <button onClick={() => logout()} className="bg-red-600 text-white px-8 py-2 rounded shadow-sm">
                Log out
            </button>

        </div>
    )
}

export default Students
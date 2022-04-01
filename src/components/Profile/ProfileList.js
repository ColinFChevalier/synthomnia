import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
// import { profile } from "./components/Auth/AuthProvider"
 
const currentUser = parseInt(localStorage.getItem("su_token"))
console.log(currentUser)

export const ProfileList = () => {
    
    const { getProfiles, getProfileById, profiles, setCurrentUser } = useContext(ProfileContext)
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        getProfiles();
    }, [])

    return (
        <>
            <h2>My Profile</h2>
            <section className="profile">
                <div className="user_info">
                    <div>
                        {currentUser.first_name} {currentUser.last_name}
                    </div>
                    <div>
                        {currentUser.profile_image_url}
                    </div>
                    <div>
                        Bio: {currentUser.bio}
                    </div>
                    {/* <div>
                        Created on {profiles.currentUser && currentUser.created_on}
                    </div> */}
                </div>
            </section>
        </>
    )
}


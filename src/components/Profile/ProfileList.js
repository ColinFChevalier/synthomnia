import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"

// const currentUser = parseInt(localStorage.getItem("su_token"))
// const userProfile = []

export const ProfileList = () => {
    
    const { currentUser, getProfileById, profiles, setCurrentUser } = useContext(ProfileContext)
    // const { userId } = useParams();

    useEffect(() => {
        getProfileById()
        .then(setCurrentUser)
    }, [currentUser])

    return (
        <>
            <h2>My Profile</h2>
            <section className="profile">
                <div className="user_info">
                    {/* <div>
                        {profiles.currentUser && currentUser.first_name} {profiles.currentUser && currentUser.last_name}
                    </div>
                    <div>
                        {profiles.currentUser && currentUser.profile_image_url}
                    </div> */}
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


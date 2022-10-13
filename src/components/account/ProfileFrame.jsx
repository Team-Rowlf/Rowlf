import React from 'react'

const ProfileFrame = (evt) => {
    if(!evt.target){
        return(
            <></>
        )
    }
    else if (evt.target.id == "likes"){
        return(
            <Likes />
        )
    }
    else if (evt.target.id == "dislikes"){
        return(
            <Dislikes />
        )
    }
    else if (evt.target.id == "edit"){
        return(
            <EditProfile />
        )
    }
    else{
        return(
            <></>
        )
    }
}

export default ProfileFrame
import React from "react";

import { getFileUrlMedia } from "../../utils/utils";

import './profile-image.styles.scss'

const ProfileImage = () => {
    const imgProfileName = 'image-avatar.png'
    return (
        <img className="profile" src={getFileUrlMedia(imgProfileName)} alt="profile" />
    )
}

export default ProfileImage;
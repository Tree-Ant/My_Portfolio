import React from 'react';

import ProfilePic from '../../../../assets/IMGs/profile_pic.jpg';

import './ProfilePic.css';

const profilePic = (props) => (
    <div className="ProfilePic">
        <img src={ProfilePic} alt="ProfilePic"></img>
    </div>
);

export default profilePic;

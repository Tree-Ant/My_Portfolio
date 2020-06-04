import React, { Component } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
// import Bio from '../../Components/Bio/Bio';
// import Cloudinary from '../../Components/Cloundinary/Cloudinary';
// import Weather from '../../Components/Widgets/Weather/Weather';
import Posts from '../../Components/Widgets/Posts/Posts';

class Main extends Component {
    render () {
        return (
            <div>
                <NavBar />
                {/* <Bio /> */}
                {/* <Cloudinary /> */}
                {/* <Weather /> */}
                <Posts />
            </div>
        )
    }
}

export default Main;
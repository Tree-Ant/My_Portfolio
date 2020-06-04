import React from 'react';

import MSstateLogo from '../../../../../assets/IMGs/MsState_seal.png';
import VandyLogo from '../../../../../assets/IMGs/Vandy_seal.png';

import './Education.css';

const education = (props) => (
    <div className='Education'>
        <div className='EduBlock'>

        <div className='EduLogo'>
            <img src={MSstateLogo} alt='msstate'></img>
        </div>
        <div className='EduInfo'>
            <h3>
                Mississippi State University
            </h3>    
                
            <p>            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie velit dignissim suscipit hendrerit. Donec quis sem eu diam lobortis congue a at mi. Sed vel tempus augue. Pellentesque pulvinar elit vitae tincidunt sagittis. Ut ut ullamcorper nunc. Donec metus dolor, posuere a lacus id, aliquam vehicula mi. Donec luctus augue ut rhoncus congue. Duis fringilla metus porta sem egestas dapibus.
            </p>
        </div>
        </div>

    <div className='EduBlock'>
        <div className='EduLogo'>
            <img src={VandyLogo} alt='msstate'></img>
        </div>
            <div className='EduInfo'>            
                <h3>
                    Vanderbilt University
                </h3>
                <p>            
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie velit dignissim suscipit hendrerit. Donec quis sem eu diam lobortis congue a at mi. Sed vel tempus augue. Pellentesque pulvinar elit vitae tincidunt sagittis. Ut ut ullamcorper nunc. Donec metus dolor, posuere a lacus id, aliquam vehicula mi. Donec luctus augue ut rhoncus congue. Duis fringilla metus porta sem egestas dapibus.
                </p>
            </div>        
    </div>
    </div>

);

export default education;
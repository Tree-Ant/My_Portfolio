import React from 'react';

import locationICON from '../../../../assets/IMGs/locationICON.png';
import globeICON from '../../../../assets/IMGs/globe.png';
import workICON from '../../../../assets/IMGs/work.png';


import './Title.css';

const title = (props) => (
    <div className='Title'>
        <h1>Trent Stokes</h1>
        <div>
            <img src={globeICON} alt='ICON'></img>
            <span>Junior Developer</span>
        </div>
        <div>
            <img src={locationICON} alt='ICON'></img>
            <span><a 
                href='https://www.google.com/maps/place/Nashville,+TN/@36.186314,-87.0654323,10z/data=!3m1!4b1!4m5!3m4!1s0x8864ec3213eb903d:0x7d3fb9d0a1e9daa0!8m2!3d36.1626638!4d-86.7816016'
                target='_)blank'>
                    Nashville, TN
            </a></span>
        </div>
        <div>
            <img src={workICON} alt='ICON'></img>
            <span>Seeking Employment</span>
        </div>
    </div>
);

export default title;
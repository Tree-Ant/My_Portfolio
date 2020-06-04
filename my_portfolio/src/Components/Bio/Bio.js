import React, { Component } from 'react';

// import Content from './Content/Content';
// import TopLine from './TopLine/TopLine';
// import Divider from './Divider/Divider';

import BioA from './Bio_A/Bio_A';
import BioB from './Bio_B/Bio_B';

import './Bio.css'

class Bio extends Component {
    render() {
        return(
            <div className='Bio'>
                <BioA />
                <BioB />
            </div>                            
        )
    }
}

export default Bio;
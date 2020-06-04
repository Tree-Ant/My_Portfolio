import React from 'react';

import Content from './Content/Content';
import Divider from './Divider/Divider';
import Header from './Content/Header/Header';
import Education from './Content/Education/Education';

import './Bio_B.css'

const BioB = (props) => (
    <div className='BioB'>
        <Header header='Bio'/>
        <Content />
        <Divider />
        <Header header='Education'/>
        <Education />
        <Divider />
        <Header header='Work Experience'/>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        
    </div>
)

export default BioB;
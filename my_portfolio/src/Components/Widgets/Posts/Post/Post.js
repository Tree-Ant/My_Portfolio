import React from 'react';

import './Post.css'

const post = (props) => (
    <div className='Post'>
        <img src={props.img} alt='first'></img>
        <h2>{props.title}</h2>
        <p>{props.abstract}</p>
    </div>
);

export default post;
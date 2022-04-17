import React from 'react';
import './IFrame.css'

const IFrame = (props) => {
    return ( 
        <div className='iFrame'>
            <h2>YouTube Video Title</h2>    
                <iframe width="420" height="315" title='YouTube Video' 
                src="https://www.youtube.com/embed/tgbNymZ7vqy" />

        </div>
     );
}
 
export default IFrame;
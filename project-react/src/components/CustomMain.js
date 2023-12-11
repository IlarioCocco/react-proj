import React from 'react';
import { Nav } from 'react-bootstrap';

function CustomMain({ imageSrc, showText }) {
    return (
        <div className='blog'>
            {imageSrc && (
                <img src={imageSrc} alt="office Blog" className='foto' />
            )}
            { showText && (
            <h1 className='blog-size'>
                <Nav.Link href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank" >blog</Nav.Link>
            </h1>
            )}
        </div>
    );
}

export default CustomMain;


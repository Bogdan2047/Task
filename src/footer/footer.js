import React from 'react';
import './footer.css';
import DMCA from './DMCA.png';

export const Footer =() =>{
    return(
        <div className='footer'>
            <div className='block-footer'>
                <div className='express'>
                    <span>Express</span>
                    <p>All Rights Reserved to info.com</p>
                    <p>© DDD – Web Marketing</p>
                    <p>Privacy Policy</p>
                    <img src={DMCA} alt=''/>
                </div>
                <div className='contact-us'>
                    <span>CONTACT US</span>
                    <p>uk +44-2020202020</p>
                    <p>aut +44-2020202020</p>
                    <p>aus +44-2020202020</p>
                </div>
                <div className='address'>
                    <span>ADDRESS</span>
                        <p>Lorem ipsum</p>
                        <p>set amet</p>
                    <div className='place'>
                    <   span>OUR OFFICE HOURS</span>
                        <p>Mon-Fr: 8:00-18:00</p>
                        <p>Sat/Su: Closed</p>
                    </div>
                </div>
                <div className='email'>
                    <span>Email US</span>
                    <p>info@info.com</p>
                </div>
            </div>
        </div>
    )
}
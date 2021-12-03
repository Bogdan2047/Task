import React from "react";
import { Navbar } from "../navbar/navbar";
import './home.css';
import Decor from './Decor.png'
import { Footer } from "../footer/footer";

export const Home = () => {
    return(
        <div className='home'>
            <Navbar/>
            <div className='home-text'>
                <span>Lorem ipsum set</span>
                <span>ammet test-test</span>
                <h1>LET US HELP YOU GET IT ALL BACK!</h1>
                <img src={Decor} alt=''/>
                <div className='block'>
                    <div>
                        <p>We currently take cases</p>
                        <p>that are $10,000 US and up</p>
                    </div>
                    <button className='btn'>Get a free consultation</button>
                </div>
            </div>
            <div className='card'>
                <div className='info'>
                    <span>Contact</span>
                    <span>Us</span>
                </div>
                <div className='user-data'>
                    <input className='form-control' placeholder='First Name'/>
                    <input className='form-control' placeholder='Last Name'/>
                </div>
                <div className='user-contact'>
                    <input className='form-control' placeholder='Country'/>
                    <input className='form-control' placeholder='Enter email'/>
                </div>
                <div className='textarea'>
                    <textarea className='form-control' placeholder='Tell Us What Happened'/>
                </div>
                <div className='butt'>
                    <button className='btn'>Send</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
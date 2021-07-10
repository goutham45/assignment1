import React, { Component } from 'react';
import Goutham from './Goutham';
export default class NavbarComp extends Component{
    render(){
        return(
            <div>
                <h1 id="comp">Home</h1>
                <img id="h_image" src="./images/allbreeds.jpg" alt="oops!! no image"></img>
                <b>
                <p id="imgdes">This Website is Basically used to check and Describe the Types of Dog Breeds.</p>
                <p >This Website is Designed by <Goutham/> as React Assignment-1</p></b>
                <h1 id="head">WELCOME TO MY REACT APPLICATION</h1>

            </div>
        )
    }
}
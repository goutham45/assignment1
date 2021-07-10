import React, { Component } from 'react';
export default class NavbarComp extends Component{
    render(){
        return(
            <div>
                <h1>Contact</h1>
                <h2 id="head1">You can Contact me at .....(@Abandant_soul) </h2>
                <ol id="clist" type="1">
                    <li>WHATSAPP</li>
                    <li>INSTAGRAM</li>
                    <li>FACEBOOK</li>
                </ol>
                <img id="imaget" src="./images/download.png" alt="oops no image"></img>
            </div>
        )
    }
}
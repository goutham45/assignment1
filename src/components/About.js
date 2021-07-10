import React, { Component } from 'react';
export default class NavbarComp extends Component{
    render(){
        return(
            <div>
                <h1>About</h1>
                <b><ul id="list" >
                    <li>
                <img id="images" src="./images/bullmastif.jpg" alt="blank"></img></li></ul>
                <h2 id="head">Bullmastiff</h2>
                <p>The Bullmastiff is a large breed of dog that can have a very stubborn personality, is known to be protective of its owners, and will become aggressive if any strangers or unwelcome animals enter its territory.</p>
                <ul id="list">
                <li>
                <img id="images1" src="./images/golden_retriever.jpg" alt="blank"></img></li></ul>
                <h2 id="head">Golden Retriever</h2>
                <p >Golden Retrievers can be dangerous and aggressive dogs if they have been neglected or abused. The generally loving and friendly Golden Retriever, can also show aggressive tendencies if not socialized properly. Golden's, due to their size, can also cause damage or injuries if not well-trained or properly exercised.</p>
                </b>
            </div>
        )
    }
}
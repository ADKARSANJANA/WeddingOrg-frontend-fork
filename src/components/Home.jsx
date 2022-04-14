import React, { Component } from 'react';
import Wedding2 from './Wedding2.jpg';
class Home extends Component {
    render() {
        return (
            <div>
               <img src={Wedding2} alt="wedding" style={{
                position: 'absolute', left:0}}height="1100px" widtht="800px"/>;
            <div class= "centered">
            <h1><b>Welcome To Wedding Organizer</b></h1>
            </div>
            </div>
        );
    }
}

export default Home;

import React from 'react';
import Carosol from './Carosol/Carosol';
import "../../App.css"
import WhoWeAre from './WhoWeAre';
import Expertise from './Expertise';
import AreaOfFocus from './AreaOfFocus';
import NumberCounter from './NumberCounter';
import HomeMidleImage from './HomeMidleImage';

const HomePage = () => {
    return (
        <div className='pt-[8rem]'>
             <Carosol></Carosol>
             <WhoWeAre></WhoWeAre>
             <Expertise></Expertise>
             <AreaOfFocus></AreaOfFocus>
             <NumberCounter></NumberCounter>
             <HomeMidleImage></HomeMidleImage>

           
        </div>
    );
};

export default HomePage;
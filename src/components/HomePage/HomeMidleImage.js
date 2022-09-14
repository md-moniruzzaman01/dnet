import React from 'react';
import midleImage from "../../image/Home-Middle-Banner-1.png"
import sponserImg1 from "../../image/vQjvNRWLGPkVx8hB8KXcFGXv2C6fbw6KyRY9P4P0kite-logo.png"
import sponserImg2 from "../../image/EphTMxQkWmsxVEwFN7ELLI150fzK82cs55B0pSdRlifechord.png"
import sponserImg3 from "../../image/KSE9sQ4uDyHiKU1bCB3LbMURWovht6WhbG8JcFeRgunijon.png"
const HomeMidleImage = () => {
    return (
        <div style={{ backgroundImage: `url(${midleImage})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} className="md:h-44 h-auto py-11 static md:flex justify-around max-w-[85rem] mx-auto">
            <div className='w-full md:w-4/12 my-5 px-4 md:my-auto '>
                <p className='text-white'>On a never ending quest for excellence,
                   <span className='block'> Dnet innovated and started off various initiatives in various contexts,</span>
                    serving the marginalized community.</p>
            </div>
            <div className='flex items-center'>
                <img src={sponserImg1} alt="" className='h-16 md:h-32 mx-4'/>
                <img src={sponserImg2} alt="" className='h-16 md:h-32 mx-4'/>
                <img src={sponserImg3} alt="" className='h-16 md:h-32 mx-4'/>
            </div>
        </div>
    );
};

export default HomeMidleImage;
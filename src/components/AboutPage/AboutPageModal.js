import React from 'react';
import bigmapImage from "../../image/about us/Dnet_CLP_Maps-2-1.jpg"
import { AiOutlineCloseCircle } from "react-icons/ai";
const AboutPageModal = () => {
    return (
        <div>

            
            <input type="checkbox" id="about-page-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative">
                    <img src={bigmapImage} alt="" className='w-full h-auto'/>
                    <div className="modal-action absolute bottom-1 right-1">
                        <label htmlFor="about-page-modal" className="btn btn-ghost text-4xl"><AiOutlineCloseCircle/></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageModal;
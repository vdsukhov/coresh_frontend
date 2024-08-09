import React from 'react';

const BioLab = (props) => {
    if (props.showBioLab) {
        return (
            <div className='container'>
                <div className="row justify-content-center pb-2 pu-2">
                    <div className='col-lg-4'>
                        <video autoplay="autoplay" loop width="160" height="160">
                            <source src={require("../assets/biological_laboratory_room.mp4")} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>)
    }

}

export default BioLab;

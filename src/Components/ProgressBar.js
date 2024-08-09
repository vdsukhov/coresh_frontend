import React from 'react';
import { Flex, Progress } from 'antd';
// import labVideo from '../assets/video/biological_laboratory_room.mp4'


// const labVideo = "./ext/video/biological_laboratory_room.mp4"


const ProgressBar = (props) => {
    if (props.showProgressBar) {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <Flex gap='small' vertical>
                            <Progress percent={props.progressPercent} />
                        </Flex>
                    </div>
                </div>
            </div>



        );
    }
    else {
        return (<div></div>)
    }

};




export default ProgressBar;

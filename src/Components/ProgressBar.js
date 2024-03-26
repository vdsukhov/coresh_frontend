import React from 'react';
import {Flex, Progress} from 'antd';


const ProgressBar = (props) => {
    if (props.showProgressBar){
        return (
            <div className="row justify-content-center px-2">
                <div className="col-lg-4">
                    <Flex gap='small' vertical>
                        <Progress percent={props.progressPercent} />
                    </Flex>
                </div>
                
            </div>
            
        );
    }
    else{
        return(<div></div>)
    }

};




export default ProgressBar;

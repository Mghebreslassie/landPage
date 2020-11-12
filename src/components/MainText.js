import React from 'react';


const MainText = (props)=>{
    
    return (
        <div className="ui container fluid">
            <p className="big-text">{props.largeMessage}</p>
            <p className="medium-text">{props.mediumMessage}</p>
        </div>
    )
}

export default MainText
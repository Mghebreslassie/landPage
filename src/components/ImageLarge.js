import React from 'react'


const ImageLarge = ()=>{
    return (
        <div>
            <img 
            alt="traveler" 
            src={process.env.PUBLIC_URL + 'backpacking-hongkong.jpg'} 
            className="large-image"
            />
        </div>
    )
}

export default ImageLarge
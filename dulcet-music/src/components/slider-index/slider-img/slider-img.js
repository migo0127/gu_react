import React from 'react';

function SliderImg(props){

    let imgStlye = {
        width: 100+"%",
        height: 100+"%"
    }

    return <img src={props.src} alt='slider-img' style={imgStlye}></img>
}

export default SliderImg;
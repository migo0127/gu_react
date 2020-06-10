import React,{useState} from 'react';

import SliderImg from './slider-img/slider-img';
import './slider-index.scss';
import bg8 from '../img/bg_8.jpg';
import bg4 from '../img/bg_4.jpg';
import bg3 from '../img/bg_3.jpeg';



function SliderIndex(){

    let sliderArr = [
        <SliderImg src={bg8}/>,
        <SliderImg src={bg4}/>,
        <SliderImg src={bg3}/>,
    ];

    const [x,setX] = useState(0);

    const goLeft = ()=>{
        x === 0 ? setX((-100*(sliderArr.length -1))) : setX(x+100) ;
    }

    const goRight = ()=>{
        x === -100 * (sliderArr.length -1) ? setX(0) : setX(x-100);
    }

    return (
        <ul className='slider'>
            {
                sliderArr.map((item,index)=> {
                    return (
                    <li className='slide' key={index} style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </li>
                    )
                })
            }
            <button id='goLeft' onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id='goRight' onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </ul>
    )
}

export default SliderIndex;
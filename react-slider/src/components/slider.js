import React,{useState} from 'react';
import './slider.scss'
import ImgComp from './imgComp';
import i1 from '../img/bg-1.jpg';
import i2 from '../img/bg-2.jpg';
import i3 from '../img/bg-3.jpg';

function Slider(){

    let sliderArr = [
        <ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>
    ];

    const [x,setX] = useState(0);

    const goLeft = ()=>{
        x === 0 ? setX((-100*(sliderArr.length -1))) : setX(x+100) ;
    }

    const goRight = ()=>{
        x === -100 * (sliderArr.length -1) ? setX(0) : setX(x-100);
    }
    
    
    return (
        <ul className='slider list-unstyled'>
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

export default Slider;
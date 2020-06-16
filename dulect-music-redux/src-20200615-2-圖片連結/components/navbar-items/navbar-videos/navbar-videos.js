import React,{useState} from 'react';

function Videos(props){

    const [videos,setVideos] = useState(
        ['小提琴','中提琴','薩克斯風','鋼琴','電子琴','爵士鼓','吉他','烏可麗麗','長笛']
        );

    return (
        <>
        {
            videos.map((item,index)=> (
                <li key={index}>
                    <a href="javascript:;">{item}</a>
                </li>
            ))
        }
        </>
    )
}

export default Videos;
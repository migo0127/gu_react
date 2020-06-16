import React,{useState} from 'react';

function News(props){

    const [news,setNews] = useState(
        ['課程資訊','活動資訊']
        );

    return (
        <>
        {
            news.map((item,index)=> (
                <li key={index}>
                    <a href="javascript:;">{item}</a>
                </li>
            ))
        }
        </>
    )
}

export default News;
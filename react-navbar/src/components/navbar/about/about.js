import React,{useState} from 'react';

function About(props){

    const [about,setAbout] = useState(
        ['關於我們','客服中心']
        );

    return (
        <>
        {
            about.map((item,index)=> (
                <li key={index}>
                    <a href="javascript:;">{item}</a>
                </li>
            ))
        }
        </>
    )
}

export default About;
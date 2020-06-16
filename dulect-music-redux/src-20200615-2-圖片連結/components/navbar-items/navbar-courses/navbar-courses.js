import React,{useState} from 'react';

function Courses(props){

    const [courses,setCourses] = useState(
        ['小提琴','中提琴','薩克斯風','鋼琴','電子琴','爵士鼓','吉他','烏可麗麗','長笛']
        );

    return (
        <>
        {
            courses.map((item,index)=> (
                <li key={index}>
                    <a href="javascript:;">{item}</a>
                </li>
            ))
        }
        </>
    )
}

export default Courses;
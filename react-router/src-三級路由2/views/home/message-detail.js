import React from 'react';

const allMessage = [
        {id:3,title:'Message003',content:'DL，您好帥'},
        {id:6,title:'Message006',content:'AYG，您好厲害'},
        {id:9,title:'Message009',content:'ZZ，您好傻'}
];

function MessageDetail(props){

    const {id} = props.match.params;
    // console.log("id:"+ props.match.params.id);

    const message = allMessage.find((m) => m.id === id*1);
    // console.log(message);


    return(
        <ul>
            <li>ID：{message.id}</li>
            <li>TITLE：{message.title}</li>
            <li>CONTENT：{message.content}</li>
        </ul>
    )
}

export default MessageDetail;
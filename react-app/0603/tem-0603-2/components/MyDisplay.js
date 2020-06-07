import React from 'react';
import PropTypes from 'prop-types';

function MyDispaly(props){

    return(
        <>
            <h1>{props.total}</h1>
        </>
    )
}

// 限制total的類型，但只會跳出警告作用，程式仍會執行
MyDispaly.propTypes = {
    total:PropTypes.number.isRequired
}

// 設定預設值，若有設定預設值，則上方的isRequired就沒意義了！
MyDispaly.defaultProps = {
    total : "我是預設值"
}

export default MyDispaly;
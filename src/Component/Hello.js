import React, { useState } from 'react';
import UserName from './UserName';

function Hello(props) {
    const [name, setName] = useState('mike');
    const [age, setAge] = useState(props.age)

    const msg = age > 19 ? "성인" : "미성년자";    

    const changName = () => {
        setAge((prev) => prev + 1)
        setName(name === 'mike' ? 'ring' : 'mike');
    }
    return (
        <div>
            <h2>{name}({age}) : {msg}</h2>
            <UserName userName={'홀리'}/>
            <button onClick={changName}>change</button>
        </div>
    )
}

export default Hello
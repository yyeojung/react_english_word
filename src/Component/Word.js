import { useState } from "react"

function Word(props) {
    const [word, setWord] = useState(props.word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = () => {
        setIsShow(!isShow)
    }

    const toggleDone = () => {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone,
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        })
    }

    const del = () => {
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE'
            }).then(res => {
                if(res.ok) {
                    setWord({id : 0})
                }
            });
        }
    }   
    if (word.id === 0 ) {
        return null;
    }
  return (
    <>
    <tr className={isDone ? "off" : ""}>
        <td>
            <input type="checkbox" checked={isDone} onChange={toggleDone} id={word.id}/>
        </td>
        <td>
            <label htmlFor={word.id}>{word.eng}</label>
        </td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
            <button onClick={del} className='btn_del'>삭제</button>
        </td>
    </tr></>
  )
}

export default Word
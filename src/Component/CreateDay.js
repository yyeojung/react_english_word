import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate  } from "react-router"

function CreateDay() {
    const days = useFetch(`http://localhost:3001/days`);
    const history = useNavigate (); 

    const addDay = () => {
        const dayValues = days.map(day => parseInt(day.day, 10));
        const enterDay = parseInt(dayRef.current.value);

        if (enterDay < 0 || enterDay.length === 0) {
            alert('0보다 큰 숫자를 입력해주세요!')
        } else if (dayValues.includes(enterDay)) {
            alert('이미 생성된 day입니다!')
        } else {
            fetch(`http://localhost:3001/days/`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    day : enterDay ,
                    // isDone : false
                }),
            }).then(res => {
                if (res.ok) {
                    alert("생성이 완료 되었습니다.");
                    history(`/`)
                }
            })

        }
        console.log(enterDay)
    }
    
    
    const dayRef = useRef();

    const addDaySubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <h3>현재 단어장 수 : {days.length}개</h3>
            <form onSubmit={addDaySubmit}>
                <input type="number" ref={dayRef} />
                <button onClick={addDay}>day 추가</button>
            </form>
        </div>
    )
}

export default CreateDay
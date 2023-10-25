import { useRef, useState } from "react";
import { useNavigate  } from "react-router"
import useFetch from "../hooks/useFetch"

function CreateWord() {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate (); 
    const [isLoading, setIsLoading] = useState(false);

    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const enterEng = engRef.current.value;
        const enterKor = korRef.current.value;
        if (enterEng.trim().length === 0 || enterKor.trim().length === 0) {
            alert('빈 칸을 모두 입력해주세요!')
        } else {
            if (!isLoading){ //isLoading이 false일때만 실행
                setIsLoading(true);
                fetch(`http://localhost:3001/words/`, {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({
                        day : dayRef.current.value ,
                        eng : engRef.current.value,
                        kor : korRef.current.value,
                        isDone : false
                    }),
                }).then(res => {
                    if (res.ok) {
                        alert("생성이 완료 되었습니다.");
                        history(`/day/${dayRef.current.value}`);
                        setIsLoading(false);
                    }
                });
            }
        }
        
        
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label htmlFor="">Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_area">
            <label htmlFor="">Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_area">
            <select ref={dayRef}>
            {days
                .sort((a, b) => a.day - b.day)
                .map(day => (
                    <option key={day.id} value={day.day}>
                        {day.day}
                    </option>
                ))}
            </select>
        </div>
        <button>{isLoading ? "저장중,,," : "저장"}</button>
    </form>
  )
}

export default CreateWord
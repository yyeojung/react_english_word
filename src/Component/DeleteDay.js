import { useState } from 'react';
import { useNavigate  } from "react-router"
import useFetch from '../hooks/useFetch';

function DeleteDay() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate (); 
    const [selectDay, setSelectDay] = useState([]);
    
    const toggleSelect = (day) => {
        if (selectDay.includes(day)) { 
            setSelectDay(selectDay.filter(id => id !== day));
        } else {
            setSelectDay([...selectDay, day])
        }
    }

    const deleteDays = () => {
        if(selectDay.length > 0) {
            selectDay.forEach(day => {
                fetch(`http://localhost:3001/days/${day}`, {
                    method: 'DELETE'
                }).then(res => {
                    if (res.ok) {
                        history(`/`)
                    }
                })
            })
            alert("삭제가 완료 되었습니다.");
        } else {
            alert('삭제 할 day를 선택하지 않았습니다.')
        }
    }
    console.log(selectDay.length)

    if (days.day === 0) {
        return null;
    }

    return (
        <>
            <h3>삭제 할 day를 선택하세요</h3>
            <ul className='list_day'>
                {days
                    .sort((a,b) => a.day - b.day)
                    .map(day => (
                        <li key={day.id}>
                            <label htmlFor={day.id}>Day {day.day}</label>
                            <input type="checkbox" 
                                id={day.id} 
                                onChange={() => toggleSelect(day.id)}
                            />
                        </li>
                    ))}
            </ul>
            <button onClick={deleteDays}>삭제</button>
        </>
    )
}

export default DeleteDay
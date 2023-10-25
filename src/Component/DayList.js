import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function DayList() {
    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data)
    //     })
    // }, []); useFetch로 만들어서 간단하게 가져오면 됨!

    const days = useFetch("http://localhost:3001/days");

    if(days.length === 0 ){
        return <span>Loading...</span>
    } //초기값이 0이기 때문에 0이면 로딩 중 띄우기

    return (
        <>
        <ul className='list_day'>
            {days
                .sort((a, b) => a.day - b.day)
                .map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
        </ul>
        </>
    )
}

export default DayList
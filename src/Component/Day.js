import Word from './Word';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Day() {
    const {day} = useParams();
    // const wordList = dummy.words.filter(word => word.day === parseInt(day) || word.day === day);
    // const [words, setWords] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // }, [day]) //day가 의존성 배열에 없으면 []에 경고, day같이 특정 값을 사용하며 []에 넣어줘야 함.

    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    

    return (
        <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Day
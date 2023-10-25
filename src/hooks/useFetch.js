import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url]); //day가 의존성 배열에 없으면 []에 경고, day같이 특정 값을 사용하며 []에 넣어줘야 함.

    return data
}

export default useFetch
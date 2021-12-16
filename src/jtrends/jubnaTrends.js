import { useState, useEffect } from 'react';
import { auth } from '../../keys';
term = 'latest';
const jubnaTrends = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                // `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                `https://abhi-api.jubna.me/api/getNewsFeed?start_date=2021-08-23&end_date=2021-10-24&Authorization=${auth}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData();
    }, [term])
    console.log(data);
    return { data };
}

export default jubnaTrends; 
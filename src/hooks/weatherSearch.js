
import { useState, useEffect } from 'react';
import { W_KEY} from '../../keys';


const weatherSearch = (term) => {
    const [data, setData] = useState(null);
  //  const numb = [1,11,21,31,41,51,61,71,81,91,101];
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=${W_KEY}`
                
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })

        }

        fetchData();
    }, [term])
 
    return { data };

}

export default weatherSearch; 
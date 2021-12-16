
import { useState, useEffect } from 'react';
import { API_KEY, CONTEXT_KEY } from '../../keys';

const useImageSearch = (term) => {
    const [data, setData] = useState(null);
  //  const numb = [1,11,21,31,41,51,61,71,81,91,101];
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://customsearch.googleapis.com/customsearch/v1?c2coff=jdk&cx=${CONTEXT_KEY}&imgType=photo&lr=ar&num=10&q=${term}&key=${API_KEY}&searchType=image`
                
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

export default useImageSearch; 

import { MarkAsUnreadSharp } from '@mui/icons-material';
import { responsiveProperty } from '@mui/material/styles/cssUtils';
import { useState, useEffect } from 'react';
// import { auth } from '../../keys';


const useTrendNews = () => {
   // const [res, setData] = useState(null);
    const [res, setData] = useState();


  //  const numb = [1,11,21,31,41,51,61,71,81,91,101];
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://abhi1-api.jubna.me/api/getNewsFeed?start_date=2021-10-25&end_date=2021-12-19&country=ae`,{
                    headers:{
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                      'Authorization':'7a2348b66ae00f41c7b8c46745b63a6162bb78b7bc332caa689eaba7bcc921cf',
                    }
                }
                
            )
                .then(res => res.json())
                .then(res => {
                    setData(res)
                })

        }
        
        fetchData();
      
    })
  
    return { res };

}

export default useTrendNews; 



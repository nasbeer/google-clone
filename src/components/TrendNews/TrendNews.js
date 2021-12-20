import React from 'react';

import useTrendsNews from '../../hooks/useTrendNews';
import { useStateValue } from '../../StateContext';
//import './TrendsNews.css';
function TrendNews() {
     
    //const [{ }] = useStateValue();
    const { res } = useTrendsNews(); // LIVE API Call
    // return (
    //     <div>
    //       {res.map(item => (
    //         <div key={item.id}>{item.title}</div>
    //       ))}
    //     </div>
    //   );

    return (
       
                <>
                      {res?.data.map(item => (
                        <div className="trendspace">
                        

                        <div className="card  card-hgt mt-4 mb-2 rounded-3 overflow-hidden flex-md-row shadow-sm h-md-250" key={item.id}>
                            <div className="card-body d-flex flex-column align-items-start">
                            
                            <h3 className="mb-0">
                                <a className="text-dark no-underline" target="_blank" href={item.link}>{item.title}</a>
                            </h3>
                            <div className="mb-0 text-muted ">{item.domain}</div>
                            <p className="card-text mb-auto d-none d-md-block desc pt-2 pb-2">{item.title}</p>
                            
                            </div>
                            <img className="card-img-right flex-auto  d-md-block logo-img"  src={item.image_src}/>
                        </div>
                        </div>
    
                      ))}
                   </>
                  
    )
}

export default TrendNews;
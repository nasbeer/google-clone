import React from 'react';
import { Link } from 'react-router-dom';

// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import moment from "moment";
import useTrendsNews from '../../hooks/useTrendNews';
import { useStateValue } from '../../StateContext';
// import logo from './jubna.png';

//import './SearchResult.css';


function JubnaTrendsNews() {
   
    const [{ }] = useStateValue();
    const { res } = useTrendsNews(); // LIVE API Call
  
    return (
        <div className="">
            

            {(
                <div className="trendspace">
                  

                    {res?.data.map(item => (
                        <div className="trendspace">
                        

                    <div className="card  card-hgt mt-4 mb-2 rounded-3 overflow-hidden flex-md-row shadow-sm h-md-250" key={item.id}>
                        <div className="card-body d-flex flex-column align-items-start">
                        
                        <h3 className="mb-2">
                            <a className="text-dark no-underline" href="#">{item.title}</a>
                        </h3>
                        <div className="mb-1 text-muted ">{item.domain}</div>
                        <p className="card-text mb-auto d-none d-md-block desc pt-2 pb-2">{item.title}</p>
                        
                        </div>
                        <img className="card-img-right flex-auto  d-md-block logo-img"  src={item.image_src}/>
                    </div>
</div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default JubnaTrendsNews;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateContext';
import { actionTypes } from '../../reducer';
import icon from '../../Icon/Trending.png';
import SearchIcon from '@material-ui/icons/Search';
//import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

import './Search.css';

function Search({ hideButtons = false }) {

    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        console.log('You hit the search button >>', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
            numb: [1,11,21,31,41,51,61,71,81,91,101]
        })
       
        history.push('/search',{input});
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)}  placeholder="ابحث عن اي شيء..."/>
                {/* <MicIcon /> */}
            </div>

            { !hideButtons ? (
                <div className="search__buttons pb-3">
                    <Button type="submit" onClick={search} variant="outlined" className="d-none">Search</Button>
          
                   
                </div>
            ) : (
                    <div className="search__buttons">
                        <Button className="search__buttonHidden" type="submit" onClick={search} variant="outlined">Search</Button>
                        <Button className="search__buttonHidden" variant="outlined">المتحور الجديد</Button>
                        <Button  className="search__buttonHidden border-radius-20"><img src={icon} className="icon-one" /></Button>
                    <Button variant="outlined" className="search__buttonHidden btn btn-default border-radius-20">المتحور الجديد</Button>
                    <Button variant="outlined" className="search__buttonHidden btn btn-default  border-radius-20">ترامب</Button>
                    <Button variant="outlined" className="search__buttonHidden btn btn-default border-radius-20">العراق</Button>
                    <Button variant="outlined" className="search__buttonHidden btn btn-default border-radius-20">لقاح كورونا</Button>
                    <Button variant="outlined" className="search__buttonHidden btn btn-default border-radius-20">جستن بيبر</Button>
                    <Button variant="outlined" className="search__buttonHidden btn btn-default border-radius-20">سوريا</Button>
                    </div>
                )
            }
        </form>
        
    )
}

export default Search;
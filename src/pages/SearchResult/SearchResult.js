import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/TextFieldsOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
//import LocalOfferIcon from '@material-ui/icons/LocalOffer';
//import RoomIcon from '@material-ui/icons/Room';
//import TrustIcon from '@material-ui/icons/Check';
import VideoIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import moment from "moment";
import useGoogleSearch from '../../hooks/useGoogleSearch/useGoogleSearch';
import { useStateValue } from '../../StateContext';
import dateFormat from 'dateformat';
import Search from '../../components/Search/Search';
import SearchOption from '../../components/SearchOption/SearchOption';
import logo from './jubna.png';
import tick from '../../Icon/tick.png';
import './SearchResult.css';

function SearchResult() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); // LIVE API Call

    return (
        <div className="searchResult">
            <div className="searchResult__header">
                <Link to="/">
                    <img className="searchResult__logo" src={logo} alt="Logo" />
                </Link>

                <div className="searchResult__headerBody">
                    <Search hideButtons />

                    <div className="searchResult__options">
                        <div className="searchResult__optionsLeft">
                            <SearchOption title="الكل" value="search" icon={<SearchIcon />} className="active"/>
                            <SearchOption title="الصور" value="image" icon={<ImageIcon />} />
                            {/* <SearchOption title="الفيديو" value="video" icon={<VideoIcon />} />
                         
                            <SearchOption title="الأخبار" value="description" icon={<ArticleIcon />} /> */}
                            {/* <SearchOption title="Shopping" icon={<LocalOfferIcon />} />
                            <SearchOption title="Maps" icon={<RoomIcon />} /> */}
                            {/* <SearchOption title="المزيد" value= "more" icon={<MoreVertIcon />} /> */}
                        </div>
                        {/* <div className="searchResult__optionsRight">
                            <SearchOption title="Settings" />
                            <SearchOption title="Tools" />
                        </div> */}
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchResult__items">
                    <p className="searchResult__itemsCount">
                    حوالي {data?.searchInformation.formattedTotalResults} نتيجة
                       <p className="d-none"> ({data?.searchInformation.formattedSearchTime} ثانية)</p>: <strong> {term} </strong>
                    </p>

                    {data?.items.map(item => (
                        <div className="card   p-3 mt-4 mb-2 rounded-3 overflow-hidden shadow-sm h-md-250 searchResult__item" style={{ backgroundColor: '#fff' }} key={item.formattedUrl}>

                            <a href={item.link} className="searchResult__itemLink d-none">
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchResult__itemImage"
                                            src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                            alt="Featured Visual" />
                                    )
                                }
                                {item.displayLink}
                                
                            </a>

                            <a >
                            <a className="searchResult__itemTitle" href={item.link}><h2>{item.title}</h2></a>
                               
                            </a>
                            <p className="d-inline-flex"><a href={item.displayLink} className="pl-3 text-dark  no-underline f-13">{item.displayLink} </a>&nbsp;
                            <span className="pl-2 d-none"> <img src={tick}/> مصدر موثوق </span></p>
                            <p className="searchResult__itemSnippet txt-clr">
                            {item.snippet} 
                            </p>
                            <p><small className="d-none">5000 زيارة</small>&nbsp;
                            <small >{dateFormat("2021-12-14", "mmmm d yyyy")}</small>
                            <small className="d-none">{item.htmlSnippet}</small>
                            </p>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchResult;
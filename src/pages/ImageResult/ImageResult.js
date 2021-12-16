// Author : Nasbeer Ahammed 
import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
//import LocalOfferIcon from '@material-ui/icons/LocalOffer';
//import RoomIcon from '@material-ui/icons/Room';
//import TrustIcon from '@material-ui/icons/Check';
import VideoIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import moment from "moment";
import useImageSearch from '../../hooks/useGoogleSearch/useImageSearch';
import { useStateValue } from '../../StateContext';
import dateFormat from 'dateformat';
import Search from '../../components/Search/Search';
import SearchOption from '../../components/SearchOption/SearchOption';
import logo from './jubna.png';
import tick from '../../Icon/tick.png';
import './ImageResult.css';
import Pagination from 'react-mui-pagination';
import Fab from '@material-ui/core/Fab';
// import Pagination from '../Pagination/pagination';
function ImageResult() {
    const [page, setMyPage] = React.useState(1);
    const [{ term, numb }, dispatch] = useStateValue();
    const { data } = useImageSearch(term, numb); // LIVE API Call
    const setPage = (e, p) => {
        setMyPage(p);
      }
    return (
        <div className="imageResult">
            <div className="imageResult__header">
                <Link to="/">
                    <img className="imageResult__logo" src={logo} alt="Logo" />
                </Link>

                <div className="imageResult__headerBody">
                    <Search hideButtons />

                    <div className="imageResult__options">
                        <div className="imageResult__optionsLeft">
                            <SearchOption title="الكل" value="search" icon={<SearchIcon />} className="active"/>
                            <SearchOption title="الصور" value="image" icon={<ImageIcon />} />
                            {/* <SearchOption title="الفيديو" value="video" icon={<VideoIcon />} />
                         
                            <SearchOption title="الأخبار" value="description" icon={<ArticleIcon />} /> */}
                            {/* <SearchOption title="Shopping" icon={<LocalOfferIcon />} />
                            <SearchOption title="Maps" icon={<RoomIcon />} /> */}
                            {/* <SearchOption title="المزيد" value= "more" icon={<MoreVertIcon />} /> */}
                        </div>
                        {/* <div className="imageResult__optionsRight">
                            <SearchOption title="Settings" />
                            <SearchOption title="Tools" />
                        </div> */}
                    </div>
                </div>
            </div>

            {term && (
                <div className="imageResult__items mb-4">
                    <p className="imageResult__itemsCount">
                    حوالي {data?.searchInformation.formattedTotalResults} نتيجة
                       <p className="d-none"> ({data?.searchInformation.formattedSearchTime} ثانية)</p>: <span className="text-warning "> {term} </span>
                    </p>
                   
                   <div className="row position-nz mb-4">
                    {data?.items.map(item => (
                       
                       <div className="col-md-2">
                        <div className="card bg-trans mt-2 mb-0 imageResult__item" style={{ backgroundColor: '#f5f5f5', border: 'none' }} key={item.formattedUrl}>
                            <div className="cont">  <img src={item.link} className="img-responsive img-ico"/>
                            <div className="bottom-left-img">{item.image.height}x{item.image.width}</div>
                            <div className="bottom-right-img">{item.image.thumbnailHeight}x{item.image.thumbnailWidth}</div>
                            </div>
                            {/* <a href={item.link} className="imageResult__itemLink  d-none">
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="imageResult__itemImage"
                                            src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                            alt="Featured Visual" />
                                    )
                                }
                                {item.displayLink}
                               
                            </a> */}
                          
                            <div className="p-0 ">
                            <a className="imageResult__itemTitle text-dark pointer-arrow">
                                <p className=" text-dark font-weight-600 "style={{'overflow':'hidden','lineHeight':'1rem','height':'15px'}}>{item.title} </p>
                            </a>
                            <small className="d-inline-flex text-muted"><a href={item.image.contextLink} target="_blank" className="pl-3 no-underline f-12 text-muted">{item.displayLink} </a>
                            </small>
                           </div>
                          
                        </div>
                        </div>
                      
                    ))}
                    {/* <Pagination /> */}
                    {/* <button className="btn btn-default text-center" style={{marginTop:'20px', width: '92%', backgroundColor:'#ccc' }}>تحميل المزيد</button> */}
                   <div className="clearfix"></div>
                    {/* <Pagination numOfLinks={10} hidePrevNext hideFirstLast page={page} setPage={setPage} total={100} /> */}
                    <Pagination
  LinksComponent='a'
  numOfLinks={10}
  hidePrevNext hideFirstLast
  linksProps={{ href: 'image/' + page }}
  activeProps={{ style: { fontWeight: 'bold' } }}
  page={page} setPage={setPage} total={424} />
                   </div>

                 
                </div>
            )}
            
        </div>
        
    )
}

export default ImageResult;
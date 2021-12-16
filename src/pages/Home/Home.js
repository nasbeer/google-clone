import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../components/Search/Search';
import one from '../../Icon/one.png';
import two from '../../Icon/two.png';
import three from '../../Icon/three.png';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import logo from './jubna_orange_logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="home">

            <div className="home__header d-none">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src={logo} alt="Logo" />

                <div className="home__inputContainer">
                    <Search />
                </div>
                
            </div>
            
            <div className="trendspace_head ">
            <div className="trendspace ">
                <div className="card  card-hgt mt-4 mb-2 rounded-3 overflow-hidden flex-md-row shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                    
                    <h3 className="mb-2">
                        <a className="text-dark no-underline" href="#">البيتكوين.. وكيف عقدت أول صفقة باستخدام العملة الرقمية؟</a>
                    </h3>
                    <div className="mb-1 text-muted ">العين الإخبارية</div>
                    <p className="card-text mb-auto d-none d-md-block desc pt-2 pb-2">في الأغلب، سبق ووصلت إليك بعض الأنباء التي تفيد بتصاعد سعر البيتكوين أمام الدولار الأمريكي بشكل ضخم، حتى وصل الأمر إلى ذروته قرب نهاية 2021، حين بلغ سعر وحدة البيتكوين الواحدة مشارف الـ70 ألف دولار أمريكي</p>
                    
                    </div>
                    <img className="card-img-right flex-auto  d-md-block logo-img"  src={one}/>
                </div>
                <div className="card card-hgt  mb-2  rounded-3 overflow-hidden flex-md-row shadow-sm h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    
                    <h3 className="mb-2">
                        <a className="text-dark no-underline" href="#">5 طرق لتعليم الأطفال معنى السعادة</a>
                    </h3>
                    
                    <p className="card-text mb-auto d-none d-md-block desc pt-2 pb-2">من المهم أن يدرك الأطفال التفاصيل المميزة من حولهم مهما كانت بسيطة، ويحددوا أسباب سعادتهم، ليعيشوا طفولة سويّة ومليئة بالتجارب والمرح والإيجابية،</p>
                    <div className="mb-1 text-muted"><button className="btn btn-default btn-sm border-radius-20">إعلان</button>&nbsp; برعاية Tabeeb </div>
                    
                    </div>
                    <img className="card-img-right flex-auto  d-md-block logo-img"  src={two}/>
                </div>

                <div className="card card-hgt  mb-2  rounded-3 overflow-hidden flex-md-row shadow-sm  h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                    
                    <h3 className="mb-2">
                        <a className="text-dark no-underline" href="#">البيتكوين.. وكيف عقدت أول صفقة باستخدام العملة الرقمية؟</a>
                    </h3>
                    <div className="mb-1 text-muted">العين الإخبارية</div>
                    <p className="card-text mb-auto d-none d-md-block desc pt-2 pb-2">في الأغلب، سبق ووصلت إليك بعض الأنباء التي تفيد بتصاعد سعر البيتكوين أمام الدولار الأمريكي بشكل ضخم، حتى وصل الأمر إلى ذروته قرب نهاية 2021، حين بلغ سعر وحدة البيتكوين الواحدة مشارف الـ70 ألف دولار أمريكي</p>
                    
                    </div>
                    <img className="card-img-right flex-auto d-md-block logo-img"  src={three}/>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Home;
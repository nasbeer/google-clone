import React from 'react';
import { Button } from '@material-ui/core';
import icon from '../../Icon/Trending.png';

import './TrendsButton.css';
function TrendButtons() {
    return (
                    <>
                    <div className="d-inline-flex text-center shadow-sm buttonTrends_head flex-sm-row">
                    {/* <div className="buttonTrans" disabled><img src={icon} className="icon-one " /></div>&nbsp;&nbsp; */}
                    <Button variant="contained" size="medium" className="border-20">Show All</Button>&nbsp;&nbsp;
                    <Button variant="outlined" size="medium" className="border-20">al-marsd.com</Button>&nbsp;&nbsp;
                    <Button variant="outlined" size="medium" className="border-20">elfann.com</Button>&nbsp;&nbsp;
                    <Button variant="outlined" size="medium" className="border-20">newsalarab.net</Button>&nbsp;&nbsp;
                    <Button variant="outlined" size="medium" className="border-20">ethraanet.com</Button>&nbsp;&nbsp;
                    <Button variant="outlined" size="medium" className="border-20">news.masrmix.com</Button>&nbsp;&nbsp;
                    <Button variant="outlined" size="medium" className="border-20">alarabpress.net</Button>
                    </div>
                    </>
    )
}

export default TrendButtons;

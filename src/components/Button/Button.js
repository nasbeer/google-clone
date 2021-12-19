import React from 'react';
import { Button } from '@material-ui/core';
import icon from '../../Icon/Trending.png';

import './TrendsButton.css';
function TrendButtons() {
    return (
                    <>
                    <div className="d-inline-flex text-center shadow-sm buttonTrends_head flex-md-row">
                    <div className="buttonTrans" disabled><img src={icon} className="icon-one " /></div>&nbsp;&nbsp;
                    <Button variant="contained" size="medium" className="border-20">المتحور الجديد</Button>&nbsp;&nbsp;
                    <Button variant="contained" size="medium" className="border-20">ترامب</Button>&nbsp;&nbsp;
                    <Button variant="contained" size="medium" className="border-20">العراق</Button>&nbsp;&nbsp;
                    <Button variant="contained" size="medium" className="border-20">لقاح كورونا</Button>&nbsp;&nbsp;
                    <Button variant="contained" size="medium" className="border-20">جستن بيبر</Button>&nbsp;&nbsp;
                    <Button variant="contained" size="medium" className="border-20">سوريا</Button>
                    </div>
                    </>
    )
}

export default TrendButtons;
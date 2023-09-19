import React from 'react'
import "./ComboOffer.scss";
import rect from  "../../assets/images/rectangle5.svg";
import combo1 from "../../assets/images/combo1.svg"
import combo2 from "../../assets/images/combo2.svg"
import combo3 from "../../assets/images/combo3.svg"
import tikIcon from "../../assets/images/tik2.svg"
import comboIcon from "../../assets/images/comboIcon.svg";
import { Col, Row } from 'antd';
import { CustomButton as Button } from '../../CommonComponents/button/Button';

const ComboOffer = () => {
  return (
    <div className='combo-offer-section'>
      <div className='combo-offer-container'>
       <div className='back-content'>
        <img src={rect} alt='rect' />
       </div>
       <div className='pic-container'>
        <div className='pic-content'>
          <div className='left-pic'>
            <img src={combo1} alt='combo1' />
          </div>
          <div className='right-pic'>
            <div className='top'>
              <img src={combo2} alt='combo2' />
              <img className='combo-offer' src={comboIcon} alt='comboIcon' />
            </div>
            <div className='bottom'>
              <img src={combo3} alt='combo3' />
            </div>
          </div>
        </div>
        <div className='text-content'>
          <div className='left-text'>
          <div className='mega'>3D MEGA PACK
          <div className='off40'>40% off</div>
          </div>
          <div className='only'>Only <span > $120</span><span className='dollar'>$200</span></div>
          </div>
          <div className='get'>What you get</div>


        </div>
       </div>
       <div className='bottom-container'>
        <div className='left-side'>
          <Button className="bookBtn" text="Book now" width="370px" />
        </div>
        <div className='right-side'>
          <Row gutter={[8,16]}>
            
          <Col span={12}>
            <div className='tik-container'>
            <img src={tikIcon} alt='tik' />
            <div className='tik-text'>4 Catalog Images</div>
          </div>
            </Col>
            <Col span={12}>
            <div className='tik-container'>
            <img src={tikIcon} alt='tik' />
            <div className='tik-text'>1 product 360 video </div>
          </div>
            </Col>
            <Col span={12}>
            <div className='tik-container'>
            <img src={tikIcon} alt='tik' />
            <div className='tik-text'>1 Ghost Image (Front) </div>
          </div>
            </Col>
            <Col span={12}>
            <div className='tik-container'>
            <img src={tikIcon} alt='tik' />
            <div className='tik-text'>Color ways (Solid colour change)</div>
          </div>
            </Col>
            <Col span={24}>
            <div className='tik-container'>
            <img src={tikIcon} alt='tik' />
            <div className='tik-text'>3 Lifestyle shot (Background of your choice)</div>
          </div>
            </Col>
          </Row>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ComboOffer

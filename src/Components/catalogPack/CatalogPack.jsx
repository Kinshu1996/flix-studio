import React from 'react'
import "./CatalogPack.scss";
import catalog1 from "../../assets/images/catalog1.svg";
import catalog2 from "../../assets/images/catalog2.svg";
import catalog3 from "../../assets/images/catalog3.svg";
import catalog4 from "../../assets/images/catalog4.svg";
import catalog5 from "../../assets/images/catalog5.svg";
import catalog6 from "../../assets/images/catalog6.svg";
import videopack1 from "../../assets/images/videopack1.svg";
import videopack2 from "../../assets/images/videopack2.svg";
import videopack3 from "../../assets/images/videopack3.svg";
import videopack4 from "../../assets/images/videopack4.svg";
import creative1 from "../../assets/images/creativepack1.svg";
import creative2 from "../../assets/images/creativepack2.svg";
import creative3 from "../../assets/images/creativepack3.svg";
import creative4 from "../../assets/images/creativepack4.svg";

import { Col, Row } from 'antd';

const catalogPackData = [
    {
        id: 1,
        bgImg: catalog1,
        title: "End to End Package"
    },
    {
        id: 2,
        bgImg: catalog2,
        title: "FlixModel"
    },
    {
        id: 3,
        bgImg: catalog3,
        title: "Packkshot/Ghost"
    },
    {
        id: 4,
        bgImg: catalog4,
        title: "Colorways"
    },
    {
        id: 5,
        bgImg: catalog5,
        title: "Flix3D"
    },
    {
        id: 6,
        bgImg: catalog6,
        title: "Creative"
    },
]

const videoPackData = [
    {
        id: 1,
        bgImg: videopack1,
        title: "360 Video"
    },
    {
        id: 2,
        bgImg: videopack2,
        title: "Virtual walk video"
    },
    {
        id: 3,
        bgImg: videopack3,
        title: "Product explainer video"
    },
    {
        id: 4,
        bgImg: videopack4,
        title: "Stop motion video"
    },
]

const creativePackData = [
    {
        id: 1,
        bgImg: creative1,
        title: "360 Video"
    },
    {
        id: 2,
        bgImg: creative2,
        title: "Virtual walk video"
    },
    {
        id: 3,
        bgImg: creative3,
        title: "Product explainer video"
    },
    {
        id: 4,
        bgImg: creative4,
        title: "Stop motion video"
    },
]


export const CatalogPack = () => {
  return (
    <div className='item-section'>
        <Row gutter={[16, 16]}>
        {
            catalogPackData.map((item, index) => (
                
<Col span={8} key={index} >
    <div className='item' style={{backgroundImage: `url(${item.bgImg})`}}>
        <div className='shadow'>
            <div className='sub-heading'>{item.title}</div>
        </div>
    </div>
  </Col>
            ))
        }
  
  </Row>
        
      
    </div>
  )
}



export const VideoPack = () => {
    return (
        <div className='item-section'>
            <Row gutter={[16, 16]}>
            {
                videoPackData.map((item, index) => (
                    
    <Col span={8} key={index} >
        <div className='item' style={{backgroundImage: `url(${item.bgImg})`}}>
            <div className='shadow'>
                <div className='sub-heading'>{item.title}</div>
            </div>
        </div>
      </Col>
                ))
            }
      
      </Row>
            
          
        </div>
      )
}


export const CreativePack = () => {
    return (
        <div className='item-section'>
            <Row gutter={[16, 16]}>
            {
                creativePackData.map((item, index) => (
                    
    <Col span={8} key={index} >
        <div className='item' style={{backgroundImage: `url(${item.bgImg})`}}>
            <div className='shadow'>
                <div className='sub-heading'>{item.title}</div>
            </div>
        </div>
      </Col>
                ))
            }
      
      </Row>
            
          
        </div>
      )
}
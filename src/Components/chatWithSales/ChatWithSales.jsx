import React from 'react'
import "./ChatWithSales.scss";
import callUsImg from "../../assets/images/CallUsImg.svg";
import tikIcon from "../../assets/images/tikIcon.svg"
import { CustomButton as Button } from '../../CommonComponents/button/Button';

const ChatWithSales = () => {
  return (
    <div className='chat-section'>
        <div className='chat-container'>
            <div className='left-side'>
                <img src={callUsImg} alt='callUsImg' loading="lazy" />
            </div>
            <div className='right-side'>
                <div className='heading'>Still have query's </div>
                <div className='tik-container'>
                    <div className='tik-content' >
                        <img src={tikIcon} alt='tikIcon' loading="lazy" />
                        <div className='text'>have a large project in mind?</div>
                    </div>
                    <div className='tik-content' >
                        <img src={tikIcon} alt='tikIcon' loading="lazy" />
                        <div className='text'>need guidance building a custom shoot?</div>
                    </div>
                    <div className='tik-content' >
                        <img src={tikIcon} alt='tikIcon' loading="lazy" />
                        <div className='text'>looking for brand specific model</div>
                    </div>
                </div>
                <Button text="Chat with sales" className="callBtn" width="212px" />
            </div>
        </div>
      
    </div>
  )
}

export default ChatWithSales

import React from 'react'
import "./GetStarted.scss";
import { CustomButton as Button } from '../../CommonComponents/button/Button'

const GetStarted = () => {
  return (
    <div className='get-started-section'>
        <div className='get-heading'>Check out our Product Finder</div>
        <div className='get-text'>take a short quiz and we will recommend the right products based on your preferences.</div>
        <Button text="Get Started" width="191.6px" className="primaryBtn Button" />
      
    </div>
  )
}

export default GetStarted

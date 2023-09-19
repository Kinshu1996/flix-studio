import { Button } from 'antd'
import React from 'react'
import "./Button.scss";

export const CustomButton = ({text, className, width,onClick}) => {
  return (
    <Button className={className} style={{width: width}} onClick={onClick} >
        {text}
    </Button>
  )
}


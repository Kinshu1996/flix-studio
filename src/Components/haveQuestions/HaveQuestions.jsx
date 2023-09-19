import React from 'react'
import "./HaveQuestions.scss";
import { Collapse } from 'antd';
import plusIcon from "../../assets/images/plusIcon.svg"
import crossIcon from "../../assets/images/crossIcon.svg"
import { CustomButton as Button } from '../../CommonComponents/button/Button';

const items = [
  {
    key: '1',
    label: <div className='col-title'>What services does Flixstudio offer?</div>,
    children: <div className='col-text'>Flixstudio offers a range of services, including catalog images, creative images, product <br />videos, and more.</div>
  },
  {
    key: '2',
    label: <div className='col-title'>How can I get started with Flixstudio?</div>,
    children: <div className='col-text'>Getting started is easy! Simply reach out to our team, and we'll guide you through the <br />process.</div>
  },
  {
    key: '3',
    label: <div className='col-title'>What is the turn around time for image delivery?</div>,
    children: <div className='col-text'>The turn around time depends on the complexity of the project, but we strive to deliver your <br /> images promptly.</div>
  },
  {
    key: '4',
    label: <div className='col-title'>Can I customize the package to suit my specific needs?</div>,
    children: <div className='col-text'>Absolutely! We offer tailored packages to meet your unique requirements.</div>
  },
  {
    key: '5',
    label: <div className='col-title'>Can I request revisions to the delivered images?</div>,
    children: <div className='col-text'>Yes, we welcome your feedback, and revisions are available within the scope of the project.</div>
  },
  {
    key: '6',
    label: <div className='col-title'>How do I send my products to Flixstudio for shooting?</div>,
    children: <div className='col-text'>You can either send your products to our studio or shoot them at your location and <br /> provide us with the files.</div>
  },
  {
    key: '7',
    label: <div className='col-title'>Are there any additional charges for using models from the Meta <br /> Models library?</div>,
    children: <div className='col-text'>No, there are no additional charges for using models from our diverse Meta Models library.</div>
  },
  {
    key: '8',
    label: <div className='col-title'>Can I preview and download my images from a central platform?</div>,
    children: <div className='col-text'>Yes, we provide a user-friendly platform where you can review and download your <br /> images hassle-free.</div>
  },
];
const HaveQuestions = () => {
  return (
    <div className='have-ques-section'>
      <div className='have-ques-container'>
        <div className='left-side'>
          <div className='heading'>Have
questions?</div>
<div className='bottom'>
<div className='text'> Have more questions?
Book a free strategy call.</div>
<Button text="Talk to expert" width="168.23px" className="talkBtn" />
</div>
        </div>
        <div className='right-side'>
        <Collapse accordion defaultActiveKey={['1']} bordered={false} expandIconPosition="end" items={items}  expandIcon={({ isActive }) =>
          isActive ? <img src={crossIcon} /> : <img src={plusIcon} />
        } />
        </div>
      </div>
    </div>
  )
}

export default HaveQuestions

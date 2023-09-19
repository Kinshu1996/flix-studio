import React from 'react'
import { Layout } from 'antd';
import PhotoShoot from '../../Components/photoshoot/PhotoShoot';
import OneStopShop from '../../Components/oneStopShop/OneStopShop';
import ControlAndInformed from '../../Components/controlAndInformed/ControlAndInformed';
import WhyFlixStudio from '../../Components/whyFlixStudio/WhyFlixStudio';
import CustomizedSolution from '../../Components/customizedSolution/CustomizedSolution';
import ExploreTrendingPage from '../../Components/exploreTrendingPage/ExploreTrendingPage';
import EachTeams from '../../Components/eachTeams/EachTeams';
import ImageryBeyond from '../../Components/imageryBeyond/ImageryBeyond';
import Offers from '../../Components/offers/Offers';
import ComboOffer from '../../Components/comboOffer/ComboOffer';
import HaveQuestions from '../../Components/haveQuestions/HaveQuestions';
import ChatWithSales from '../../Components/chatWithSales/ChatWithSales';
import SatisfiedCustomer from '../../Components/satsfiedCustomer/SatisfiedCustomer';
import { CustomFooter as Footer } from '../../CommonComponents/Footer/Footer';
import { CustomHeader as Header } from '../../CommonComponents/header/Header';

const {Content } = Layout;

const Home = () => {
  return (
    <Layout>
        <Header />
        <Content style={{background: "#ffffff"}}>
            <PhotoShoot />
            <OneStopShop />
            <ControlAndInformed />
            <WhyFlixStudio />
            <CustomizedSolution />
            <ExploreTrendingPage />
            <EachTeams />
            <ImageryBeyond />
            <SatisfiedCustomer />
            <Offers />
            <ComboOffer />
            <HaveQuestions />
            <ChatWithSales />
        </Content>
        <Footer />
    </Layout>
  )
}

export default Home

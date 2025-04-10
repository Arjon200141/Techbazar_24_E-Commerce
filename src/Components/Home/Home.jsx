import React from 'react';
import Banner from './Banner';
import Intro from './intro';
import OurServices from '../Services/OurServices';
import Progress from '../Services/Progress';
import Number from './Number';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Number></Number>
            <OurServices></OurServices>
            <Progress></Progress>
        </div>
    );
};

export default Home;
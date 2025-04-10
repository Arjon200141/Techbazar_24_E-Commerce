import React from 'react';
import Banner from './Banner';
import Intro from './intro';
import OurServices from '../Services/OurServices';
import Progress from '../Services/Progress';
import Number from './Number';
import OurExpert from '../Expertise/OurExpert';
import Values from './Values';
import Clients from '../About/Clients';
import Work from './Work';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Number></Number>
            <OurExpert></OurExpert>
            <Values></Values>
            <OurServices></OurServices>
            <Progress></Progress>
            <Clients></Clients>
            <Work></Work>
        </div>
    );
};

export default Home;
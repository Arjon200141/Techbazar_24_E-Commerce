import BannerAb from "./BannerAb";
import Clients from "./Clients";
import Cooperate from "./Cooperate";
import Get from "./Get";
import Management from "./Management";
import Mission from "./Mission";

const About = () => {
    return (
        <div>
            <BannerAb></BannerAb>
            <Mission></Mission>
            <Management></Management>
            <Cooperate></Cooperate>
            <Get></Get>
            <Clients></Clients>
        </div>
    );
};

export default About;
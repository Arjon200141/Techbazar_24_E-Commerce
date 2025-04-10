import BannerService from "./BannerService";
import OurServices from "./OurServices";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Progress from "./Progress";

const Services = () => {
    return (
        <div>
            <BannerService></BannerService>
            <OurServices></OurServices>
            <Progress></Progress>
            <Pricing></Pricing>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Services;
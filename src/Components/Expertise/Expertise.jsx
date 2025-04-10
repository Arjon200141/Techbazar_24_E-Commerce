import Clients from "../About/Clients";
import ExpertBanner from "./ExpertBanner";
import Industries from "./Industries";
import OurExpert from "./OurExpert";

const Expertise = () => {
    return (
        <div>
            <ExpertBanner></ExpertBanner>
            <OurExpert></OurExpert>
            <Industries></Industries>
            <Clients></Clients>
        </div>
    );
};

export default Expertise;
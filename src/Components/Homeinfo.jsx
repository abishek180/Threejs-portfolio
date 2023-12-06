import { Link } from "react-router-dom";
import { ImPointRight } from "react-icons/im";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <ImPointRight />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Abishek</span>👋
      <br />A FrontEnd Devoleper from Mars
    </h1>
  ),
  2: (
    <h1>
      <InfoBox
        text="Worked with many companies and picked up many skills along the way"
        link="/about"
        btnText="Learn more"
      />
    </h1>
  ),
  3: (
    <h1>
      <InfoBox
        text="Led multiple projects to succes over the years. Curious about the impact?"
        link="/projects"
        btnText="Visit my portfolio"
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/contact"
        btnText="Let's talk"
      />
    </h1>
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;

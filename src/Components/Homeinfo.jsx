import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
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
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;

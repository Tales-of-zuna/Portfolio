import "../../styles/background.css";

const RainDrop = () => <div className="drop"></div>;

const Waves = () => (
  <div className="waves">
    <div></div>
    <div></div>
  </div>
);

const Splash = () => <div className="splash"></div>;

const Particles = () => (
  <div className="particles">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const Rain = () => (
  <div className="rain">
    <RainDrop />
    <Waves />
    <Splash />
    <Particles />
  </div>
);

const Background = () => (
  <div className="containerBG">
    {[...Array(9)].map((_, index) => (
      <Rain key={index} />
    ))}
  </div>
);

export default Background;

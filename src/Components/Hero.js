import classes from "./Hero.module.css";
import heroDark from '../images/hero-dark.png';

const Hero = () => {
  return (
    <section className={classes.heroSection}>
      <div>
        <h1>Hello, I'm</h1>
        <h2>Alex Pritchard</h2>
        <h3>A Full-Stack Developer In Training</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </p>
      </div>
      <div>
        {/* <img src={heroDark} alt="hero-image"></img> */}
      </div>
    </section>
  );
};

export default Hero;

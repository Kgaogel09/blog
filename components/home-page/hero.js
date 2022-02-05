import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <Image
        className={classes.img}
        src="/me.png"
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <h1>Hero Component</h1>
      <p>Welcome to the Hero component!</p>
    </div>
  );
}

export default Hero;

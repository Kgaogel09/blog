import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/me.jpg"
          alt="Picture of the author"
          width={280}
          height={280}
        />
      </div>
      <h1>Hi, I am Thorn</h1>
      <p>
        Welcome to my Frontend Blog! I blog blog about frontend frameworks
        especially angular and react.
      </p>
    </section>
  );
}

export default Hero;

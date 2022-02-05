import { Fragment } from "react/cjs/react.production.min";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;

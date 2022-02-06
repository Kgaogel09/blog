import { Fragment } from "react/cjs/react.production.min";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helpers/posts-utils";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started With NextJs",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "Next.js is a React framework for developing single page Javascript applications.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-react",
//     title: "Getting Started With React",
//     image: "getting-started-with-react.png",
//     excerpt:
//       "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
//     date: "2022-03-10",
//   },
//   {
//     slug: "getting-started-with-angular",
//     title: "Getting Started With Angular",
//     image: "getting-started-with-angular.png",
//     excerpt:
//       "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
//     date: "2022-04-10",
//   },
// ];

function HomePage({ posts }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

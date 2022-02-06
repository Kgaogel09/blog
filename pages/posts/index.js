import AllPosts from "../../components/posts/all-posts";
import { getALlPost } from "../../helpers/posts-utils";

function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getALlPost();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;

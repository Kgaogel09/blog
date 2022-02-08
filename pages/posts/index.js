import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getALlPost } from "../../helpers/posts-utils";

function AllPostsPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming posts!" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
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

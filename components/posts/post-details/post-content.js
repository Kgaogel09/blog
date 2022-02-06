import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started With NextJs",
  image: "getting-started-with-nextjs.png",
  content: "## Framework for developing single page Javascript applications.",
  date: "2022-02-10",
};

function PostContent() {
  const imagePath = `/images/post/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
